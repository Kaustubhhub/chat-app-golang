package main

import (
	"fmt"
	"net/http"

	"github.com/kaustubhhub/chat-app-golang/pkg/websocket"
)

func setupRoutes() {
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})
}

func main() {
	fmt.Println("Kaustubh's fullstack chat app")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}
