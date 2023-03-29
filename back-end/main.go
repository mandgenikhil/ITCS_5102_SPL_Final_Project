package main

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/gin-gonic/contrib/static"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Ping test
	r.GET("/home", func(c *gin.Context) {
		c.String(http.StatusOK, "Welcome to Golang REST API using Gin web framework!!!")
	})

	// r.GET("/test", func(c *gin.Context) {
	// 	// read from file
	// 	data, err := os.ReadFile("/Users/nikhilmandge/Spring2023/ITCS_5102_SPL_Final_Project/front-end/build/index.html")
	// 	if err != nil {
	// 		// error handler
	// 	}
	// 	switch c.Request.URL.Path {
	// 	case ".html":
	// 		c.Header("Content-Type", "text/html")
	// 	case ".css":
	// 		c.Header("Content-Type", "text/css")
	// 	case ".js":
	// 		c.Header("Content-Type", "application/javascript")
	// 		// ...
	// 	}
	// 	_, _ = c.Writer.Write(data)
	// })

	// r.GET("/", func(c *gin.Context) {
	// 	c.String(http.StatusOK, "Default Page")
	// })

	// r.StaticFile("/favicon.ico", "./resources/favicon.ico")

	return r
}

func main() {
	r := setupRouter()
	r.Use(static.Serve("/", static.LocalFile("../front-end/ystw-ui/build/", true)))

	portNumber := ":8080"
	r.Run(portNumber)
}
