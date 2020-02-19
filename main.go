package main

import (
	"fmt"
	"net/http"

	"github.com/wufe/bembi.dev/infrastructure"
	"github.com/wufe/bembi.dev/presentation"
	"github.com/wufe/bembi.dev/services"

	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"

	"go.uber.org/dig"
)

func registerDatabase(diContainer *dig.Container) {
	database := infrastructure.NewDatabase()
	database.Connect()
	database.Automigrate()
	database.Seed()

	diContainer.Provide(func() infrastructure.DatabaseAccessor {
		return database
	})
}

func registerServices(diContainer *dig.Container) {
	servicesMap := make(map[string]interface{})

	// Create an entry here to register a service via IOC
	servicesMap["Home"] = services.NewHomeService

	for key, service := range servicesMap {
		err := diContainer.Provide(service)
		if err != nil {
			fmt.Printf("Could not resolve dependencies for service %s\n", key)
			fmt.Println(err.Error())
		}
	}
}

// Starts up HTTP handlers by invocation
// Should be called after all DI registrations
func startupHTTPHandlers(app *iris.Application, diContainer *dig.Container) {
	handlersMap := make(map[string]interface{})

	// Add a new controller here
	handlersMap["/"] = presentation.GetHomeHandlers(app.Party("/"))
	handlersMap["/home"] = presentation.GetHomeHandlers(app.Party("/home"))

	for key, handler := range handlersMap {
		err := diContainer.Invoke(handler)
		if err != nil {
			fmt.Printf("Could not resolve dependencies for handler %s\n", key)
			fmt.Println(err.Error())
		}
	}

}

func registerStaticFs(app *iris.Application, diContainer *dig.Container) {

	targetFileSystem := infrastructure.NewFileSystem()
	fileServerHandler := http.FileServer(targetFileSystem)

	app.Get("/static/{asset:path}", func(ctx iris.Context) {
		iris.FromStd(func(w http.ResponseWriter, r *http.Request) {
			r.URL.Path = ctx.Params().Get("asset")
			fileServerHandler.ServeHTTP(w, r)
		})(ctx)
	})

	diContainer.Provide(func() http.FileSystem {
		return targetFileSystem
	})
}

func main() {
	app := iris.New()

	app.Logger().SetLevel("error")
	app.Use(recover.New())
	app.Use(logger.New())

	diContainer := dig.New()
	registerDatabase(diContainer)
	registerServices(diContainer)

	registerStaticFs(app, diContainer)

	startupHTTPHandlers(app, diContainer)

	port := 2345
	fmt.Printf("Starting server on port %d..\n", port)
	// app.OnErrorCode(iris.StatusInternalServerError, func(ctx iris.Context) {
	// 	ctx.HTML("InternalServerError: <b>" + ctx.Values().GetString("message") + "</b>")
	// })
	app.Run(iris.Addr(fmt.Sprintf(":%d", port)), iris.WithoutServerError(iris.ErrServerClosed), iris.WithoutStartupLog)
	// app.Run(iris.Addr(fmt.Sprintf(":%d", port)))

}
