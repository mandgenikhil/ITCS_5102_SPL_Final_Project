package main

import (
	"fmt"

	gotube "github.com/a1phat0ny/gotube"
)

func main() {
	video, err := gotube.NewVideo("https://www.youtube.com/watch?v=WTJSt4wP2ME&ab_channel=KnaanVEVO", true)
	stream := video.Streams().Videos().Best() // --> Streams ([]Stream)
	path, err := stream.Download("./Download", "test_song", true,
		func(total int64) {
			fmt.Println("Total", total)
		},
		func(written int64) {
			fmt.Print(written, "\r")
		},
	)

	fmt.Println("Video downloaded with path " + path)
	fmt.Println(err)
}
