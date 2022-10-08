import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelContainerList,Auth } from "./components/index";
const API_KEY = "vsywfsrbj5cq";
const client = StreamChat.getInstance(API_KEY);
const authToken = false
function App() {
  if(!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainerList>

        </ChannelContainerList>
      </Chat>
    </div>
  );
}

export default App;
