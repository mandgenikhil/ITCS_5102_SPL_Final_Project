package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func setupRouter() *gin.Engine {
	r := gin.Default()

	// Ping test
	r.GET("/home", func(c *gin.Context) {
		c.String(http.StatusOK, "Welcome to Golang REST API using Gin web framework!!!")
	})

	return r
}

func main() {
	r := setupRouter()
	portNumber := ":8080"
	r.Run(portNumber)
}
