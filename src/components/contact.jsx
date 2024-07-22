import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const sendMessage = async () => {
        if (userInput.trim() === '') return;

        const newMessage = { sender: 'user', text: userInput };
        setMessages([...messages, newMessage]);
        setUserInput('');


        const aiMessage = { sender: 'ai', text: "venam, pothum da" };
        setMessages([...messages, newMessage, aiMessage]);
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.sender}>
                        <strong>{msg.sender === 'user' ? 'You' : 'AI'}:</strong> {msg.text}
                    </p>
                ))}
            </div>
            <div className="input-box">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type your message here..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Contact;
