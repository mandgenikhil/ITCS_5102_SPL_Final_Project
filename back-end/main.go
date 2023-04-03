package main

import (
	"database/sql"
	"net/http"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"

	"github.com/gin-gonic/contrib/static"
)

var DB *sql.DB

func ConnectDatabase() error {
	db, err := sql.Open("sqlite3", "./names.db")
	if err != nil {
		return err
	}

	DB = db
	return nil
}

type request struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Youtube_URL string `json:"url"`
	Input_Lang  string `json:"input_lang"`
	Output_Lang string `json:"output_lang"`
	Status      string `json:"status"`
}

var requests = []request{
	{ID: "1", Name: "Test Request 1", Youtube_URL: "https://www.youtube.com/watch?v=ytjD4f_I0sc&ab_channel=Olympics", Input_Lang: "en-US", Output_Lang: "hi-IN", Status: "NA"},
	{ID: "2", Name: "Test Request 2", Youtube_URL: "https://www.youtube.com/watch?v=uKj4S9ig7c8&ab_channel=Olympics", Input_Lang: "en-US", Output_Lang: "de-DE", Status: "NA"},
}

func getAllRequests(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, requests)
}

func getRequestByID(c *gin.Context) {
	request_id := c.Param("id")
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Content-Type", "application/json")

	for _, a := range requests {
		if a.ID == request_id {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}

	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Request not found"})
}

func postRequest(c *gin.Context) {
	var newRequest request

	// Call BindJSON to bind the received JSON to
	// Create New Request.
	if err := c.BindJSON(&newRequest); err != nil {
		return
	}

	// Add the new request to the slice.
	newRequest.Status = "Created"
	requests = append(requests, newRequest)
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Content-Type", "application/json")
	c.IndentedJSON(http.StatusCreated, newRequest)
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	return r
}

func main() {
	r := setupRouter()

	r.GET("/request", getAllRequests)
	r.GET("/request/:id", getRequestByID)
	r.POST("/request", postRequest)
	r.Use(static.Serve("/", static.LocalFile("../front-end/ystw-ui/build/", true)))

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}

	r.Use(cors.New(config))

	portNumber := ":8081"
	r.Run(portNumber)
}
