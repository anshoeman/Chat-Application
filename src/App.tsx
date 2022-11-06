import React, { useState } from "react";
import logo from "./logo.svg";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelContainerList, Auth } from "./components/index";

import '@stream-io/stream-chat-css/dist/css/index.css'
import './App.css';
const cookies = new Cookies();
const API_KEY = "chj58swusav2";
const client = StreamChat.getInstance(API_KEY);
const authToken = cookies.get("token");

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    token: cookies.get('token'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}
function App() {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelContainerList
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
        />
        <ChannelContainer
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          createType={createType}
        />
      </Chat>
    </div>
  );
}

export default App;
