// Chat.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChatItemsContainer } from "./ChatElement";
import ChatArea from "./ChatArea/ChatArea";
import ChatMessage from "./DummyChat/ChatMessage";
import ChatMessageSelf from "./DummyChat/ChatMessageSelf";
import chatData from "./DummyChat/ChatData";

const Chat = () => {
    const { user } = useSelector((state) => state.auth);
    const location = useLocation(); // Use useLocation to get the URL location
    const channelId = location.pathname.replace("/chat/", "");
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        // Find the channel by channelId
        const foundChannel = chatData.channels.find((ch) => ch.id === channelId);
        setChannel(foundChannel);
    }, [channelId]);
    console.log(channelId);

    if (!channel) {
        return (
            <ChatItemsContainer>
                <div>
                    <h2>Channel not found</h2>
                </div>
            </ChatItemsContainer>
        );
    }

    return (
        <ChatItemsContainer>
            <ChatArea name={channel.channelname} />
            {channel.messages.map((message, index) =>
                message.username === user.username ? (
                    <ChatMessageSelf key={index} {...message} />
                ) : (
                    <ChatMessage key={index} {...message} />
                ),
            )}
        </ChatItemsContainer>
    );
};

export default Chat;