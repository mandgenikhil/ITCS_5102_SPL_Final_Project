package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	url := "https://coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com//?id=lF-jPBnZ098"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "640322e98bmsh044a2c3f935e237p1fb332jsnb6684dd45a51")
	req.Header.Add("X-RapidAPI-Host", "coolguruji-youtube-to-mp3-download-v1.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
