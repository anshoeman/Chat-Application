import React from "react";
import { APIErrorResponse, Channel, ErrorFromResponse } from "stream-chat";
import { DefaultStreamChatGenerics } from "stream-chat-react/dist/types/types";
import { AddChannel } from "../assets";

interface IChannelProps {
  error: ErrorFromResponse<APIErrorResponse> | null;
  loadedChannels?: Channel<DefaultStreamChatGenerics>[] | undefined;
  loading?: boolean | undefined;
  children?: string;
  type?: string | null;
}
const TeamChannelList: React.FC<IChannelProps> = ({
  error = false,
  loading,
  type,
  children,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          connection error,please wait a moment and try again
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    <div className="team-channel-list">
      <p className="team-channel-list__message loading">
        {type === "team" ? "Channels" : "Messages"}loading....
      </p>
    </div>;
  }
  return(
  <div className="team-channel-list">
        <div className="team-channel-list__header">
            <p className="team-channel-list__header__title">
            {type === "team" ? "Channels" : "Direct Messages"}
            </p>
        </div>
        {children}
  </div>
  );
};

export default TeamChannelList;
