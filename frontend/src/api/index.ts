const socket = new WebSocket('ws://localhost:9000/ws');

const connect = (cb: (msg: MessageEvent) => void): void => {
    console.log("connecting");

    socket.onopen = () => {
        console.log("successfully connected");
    };

    socket.onmessage = (msg: MessageEvent) => {
        console.log("message from websocket: ", msg);
        cb(msg);
    };

    socket.onclose = (event: CloseEvent) => {
        console.log("socket close connection: ", event);
    };

    socket.onerror = (error: Event) => {
        console.log("socket error: ", error);
    };
};

const sendMsg = (msg: string): void => {
    if (socket.readyState === WebSocket.OPEN) {
        console.log("sending message: ", msg);
        socket.send(msg);
    } else {
        console.log("WebSocket is not open. Ready state is:", socket.readyState);
    }
};

export { connect, sendMsg };
