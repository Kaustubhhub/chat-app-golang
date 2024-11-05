import React, { Component, KeyboardEvent } from 'react';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import './App.css';
import { connect, sendMsg } from './api';

interface ChatMessage {
  timeStamp: string;
  data: string;
}

interface AppState {
  chatHistory: ChatMessage[];
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      chatHistory: []
    };
    this.send = this.send.bind(this);
  }

  componentDidMount() {
    connect((msg: MessageEvent) => {
      console.log("New Message");

      // Parse MessageEvent data to match ChatMessage structure
      const parsedMessage: ChatMessage = {
        timeStamp: new Date().toISOString(), // or msg.timeStamp.toString() if needed
        data: msg.data
      };

      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, parsedMessage]
      }));
      console.log(this.state);
    });
  }

  send(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      sendMsg(event.currentTarget.value);
      event.currentTarget.value = "";
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
        <ChatInput send={this.send} />
      </div>
    );
  }
}

export default App;
