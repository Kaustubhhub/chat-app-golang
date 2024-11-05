import { Component } from 'react';
import './Message.scss';

interface MessageProps {
    message: string; 
}

interface MessageState {
    message: {
        body: string;
        [key: string]: any; 
    };
}

class Message extends Component<MessageProps, MessageState> {
    constructor(props: MessageProps) {
        super(props);
        const temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        return (
            <div className='Message'>
                {this.state.message.body}
            </div>
        );
    }
}

export default Message;
