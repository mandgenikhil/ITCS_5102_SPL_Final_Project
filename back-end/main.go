package main

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"

	"log"
	"net/http"

	"github.com/gin-contrib/cors"

	"github.com/gin-gonic/gin"

	"github.com/gin-gonic/contrib/static"
)

// Global Db Declaration
var Database_Sqlite *sql.DB

// Connect DB Function
func ConnectDatabase() error {
	database, err_Obj := sql.Open("sqlite3", "./demo.db")
	if err_Obj != nil {
		return err_Obj
	}

	Database_Sqlite = database
	return nil
}

// Global Request Model
type Request struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	Youtube_URL string `json:"url"`
	Input_Lang  string `json:"input_lang"`
	Output_Lang string `json:"output_lang"`
	Status      string `json:"status"`
}

// DB Operation Functions Start

// Get Request Obj From Db by ID
func GetRequestByID(id string) (Request, error) {

	stmt, err := Database_Sqlite.Prepare("SELECT id, name, youtube_url, input_lang,output_lang,status from request WHERE id = ?")

	if err != nil {
		return Request{}, err
	}

	request := Request{}

	sqlErr := stmt.QueryRow(id).Scan(&request.Id, &request.Name, &request.Youtube_URL, &request.Input_Lang, &request.Output_Lang, &request.Status)

	if sqlErr != nil {
		if sqlErr == sql.ErrNoRows {
			return Request{}, nil
		}
		return Request{}, sqlErr
	}
	return request, nil
}

// Get All Requests Obj From Db
func GetRequests() ([]Request, error) {

	rows, err := Database_Sqlite.Query("SELECT *  from request")

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	request := make([]Request, 0)

	for rows.Next() {
		singleRequest := Request{}
		err = rows.Scan(&singleRequest.Id, &singleRequest.Name, &singleRequest.Youtube_URL, &singleRequest.Input_Lang, &singleRequest.Output_Lang, &singleRequest.Status)

		if err != nil {
			return nil, err
		}

		request = append(request, singleRequest)
	}

	err = rows.Err()

	if err != nil {
		return nil, err
	}

	return request, err
}

func UpdateRequest(id string, result string) (bool, error) {

	fmt.Println("yo :- " + result)

	tx, err := Database_Sqlite.Begin()
	if err != nil {
		return false, err
	}

	stmt, err := tx.Prepare("UPDATE request SET status = ? WHERE id = ?")

	if err != nil {
		return false, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(result, id)

	if err != nil {
		return false, err
	}

	tx.Commit()

	return true, nil
}

// Insert New Request2 Obj To Db
func AddRequest(newRequest Request) (bool, error) {

	statement, err_Obj := Database_Sqlite.Begin()
	if err_Obj != nil {
		return false, err_Obj
	}

	stmt, err_Obj := statement.Prepare("INSERT INTO request (name, youtube_url, input_lang, output_lang, status) VALUES (?, ?, ?, ?, ?)")

	if err_Obj != nil {
		return false, err_Obj
	}

	defer stmt.Close()

	_, err_Obj = stmt.Exec(newRequest.Name, newRequest.Youtube_URL, newRequest.Input_Lang, newRequest.Output_Lang, newRequest.Status)

	if err_Obj != nil {
		return false, err_Obj
	}

	statement.Commit()

	return true, nil
}

// DB Operation Functions Ends
func checkErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}

func getAllRequests(c *gin.Context) {
	//Searching In Database
	requests, err := GetRequests()
	checkErr(err)

	if requests == nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "No Requests Found"})
		return
	} else {
		c.JSON(http.StatusOK, requests)
	}
}

func getRequestByID(c *gin.Context) {
	request_id := c.Param("id")

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Content-Type", "application/json")

	request, err := GetRequestByID(request_id)

	if err == nil && request.Name != "" {
		c.IndentedJSON(http.StatusOK, request)
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Request not found"})
	}
}

func getRequestResult(c *gin.Context) {
	req_id := c.Query("request_id")
	out_res := c.Query("result")

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Content-Type", "application/json")

	result_bool, err := UpdateRequest(req_id, out_res)

	if err == nil && result_bool == true {
		c.IndentedJSON(http.StatusOK, gin.H{"message": out_res})
	} else {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Error Occured!"})
	}
}

func postRequest(c *gin.Context) {
	var json Request

	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	success, err := AddRequest(json)
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Content-Type", "application/json")
	if success {
		c.JSON(http.StatusOK, gin.H{"message": "Success"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": err})
	}
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	return r
}

func main() {
	err := ConnectDatabase()
	checkErr(err)

	r := setupRouter()
	r.GET("/request/result", getRequestResult)
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
