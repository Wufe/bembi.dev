package infrastructure

import (
	"net/http"
	"os"

	"github.com/rakyll/statik/fs"
	_ "github.com/wufe/bembi.dev/statik"
)

type indexWrapper struct {
	assets   http.FileSystem
	fallback http.FileSystem
}

func (i *indexWrapper) Open(name string) (http.File, error) {
	ret, err := i.assets.Open(name)
	if !os.IsNotExist(err) {
		return ret, err
	}

	ret, err = i.fallback.Open(name)
	return ret, err
}

func NewFileSystem() http.FileSystem {
	statikFS, err := fs.New()
	if err != nil {
		panic(err)
	}

	wrapper := &indexWrapper{
		assets:   statikFS,
		fallback: http.Dir("./dist/static"),
	}

	return wrapper
}
