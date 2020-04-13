package presentation

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/kataras/iris"
	"github.com/wufe/bembi.dev/services"
)

func GetHomeHandlers(party iris.Party) func(services.HomeService, http.FileSystem) {

	serveIndexBuilder := func(staticFs http.FileSystem) func(iris.Context) {
		return func(ctx iris.Context) {
			switch referrer := ctx.URLParam("r"); referrer {
			case "linkedin":
				fmt.Println("Got view from linkedin")
			case "facebook":
				fmt.Println("Got view from facebook")
			}
			file, err := staticFs.Open("/index.html")
			if err != nil {
				fmt.Println("Error:", err)
				panic(err)
			}
			bytes, err := ioutil.ReadAll(file)
			if err != nil {
				fmt.Println("Error:", err)
				panic(err)
			}
			ctx.ContentType("text/html")
			ctx.Write(bytes)
			// ctx.WriteGzip(bytes)
			// index, err := staticFs.Find("index.html")
			// if err != nil {
			// 	fmt.Println(err)
			// 	panic(err)
			// }
			// ctx.ContentType("text/html")
			// _, err = ctx.WriteGzip(index)
			// if err != nil {
			// 	fmt.Println(err)
			// 	panic(err)
			// }
			// stringIndex, err := staticFs.Find("index.html")
			// if err != nil {
			// 	fmt.Println(err)
			// 	panic(err)
			// }
			// ctx.WriteGzip([]byte(stringIndex))
		}
	}

	return func(homeService services.HomeService, staticFs http.FileSystem) {
		serveIndex := serveIndexBuilder(staticFs)
		party.Get("/test", func(ctx iris.Context) {
			status := homeService.GetStatus()
			ctx.WriteString(status)
		})
		party.Get("/", serveIndex)
		party.Get("/projects/rpj", serveIndex)
		party.Get("/projects/liquid", serveIndex)
	}
}
