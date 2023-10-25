import React from "react";
import { MessageContainer, MessageContent, Timestamp, SenderImage } from "./ChatMessageElement";

const ChatMessage = ({ username, message, image, time, sender }) => {
    return (
        <MessageContainer>
            <SenderImage src={image} alt="Sender's Image" />
            <MessageContent>
                <h4>{username}</h4>

                <p>{message}</p>
                <Timestamp
                    style={{
                        color: "#b1b3b5",
                        fontSize: "10px",
                        fontWeight: "bold",
                    }}
                >
                    {time}
                </Timestamp>
            </MessageContent>
        </MessageContainer>
    );
};

export default ChatMessage;
