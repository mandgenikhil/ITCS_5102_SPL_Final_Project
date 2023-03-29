package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := ""

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "")
	req.Header.Add("X-RapidAPI-Host", "")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
