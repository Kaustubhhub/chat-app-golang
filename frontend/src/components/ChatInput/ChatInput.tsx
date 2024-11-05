import React, { Component, KeyboardEventHandler } from "react";
import './ChatInput.scss';

interface ChatInputProps {
    send: KeyboardEventHandler<HTMLInputElement>;
}

class ChatInput extends Component<ChatInputProps> {
    render() {
        return (
            <div className="ChatInput">
                <input 
                    onKeyDown={this.props.send} 
                    placeholder="Type a message... Hit enter to send" 
                />
            </div>
        );
    }
}

export default ChatInput;
