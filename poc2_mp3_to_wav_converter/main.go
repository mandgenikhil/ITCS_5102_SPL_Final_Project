package main

import (
	"fmt"
	"log"
	"os"
	"path"

	godub "github.com/iFaceless/godub"
	audio "github.com/iFaceless/godub/converter"
)

func main() {
	filePath := path.Join("https://github.com/iFaceless/godub/blob/72b0a1c73aaf392ac5a3639e88a8ec3f5db948bd/_examples/data/", "code-geass.mp3")
	toFilePath := path.Join("./converted/", "code-geass.m4a")
	w, _ := os.Create(toFilePath)

	err := audio.NewConverter(w).
		WithBitRate(64000).
		WithDstFormat("m4a").
		Convert(filePath)
	if err != nil {
		log.Fatal(err)
	}

	segment, _ := godub.NewLoader().Load(toFilePath)
	fmt.Println(segment)
}
