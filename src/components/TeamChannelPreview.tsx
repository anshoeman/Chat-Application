import { kStringMaxLength } from "buffer";
import React, { ReactChild } from "react";
import { Channel } from "stream-chat";
import {
  Avatar,
  ChannelPreviewUIComponentProps,
  useChatContext,
} from "stream-chat-react";
import { DefaultStreamChatGenerics } from "stream-chat-react/dist/types/types";
interface ITeamChannelPreview {
  type: string;
  channel: any;
}
const TeamChannelPreview: React.FC<ITeamChannelPreview> = ({
  channel,
  type,
}) => {
  const { channel: activeChannel, client } = useChatContext();
  const ChannelPreview = () => (
    <div className="channel-preview__item">
      #{channel?.data?.name || channel?.data?.id}
    </div>
  );
  const DirectPreview = () => {
    const members: any = Object.values(channel.state.members).filter(
      ({ user }: any) => user.id !== client.userID
    );
    return (
      <div className="channel-preview__item single">
        <Avatar
          image={members[0]?.user?.image}
          name={members[0]?.user?.fullName}
          size={24}
        />
      </div>
    );
  };
  return (
    <div
      className={
        channel?.id === activeChannel?.id
          ? "channel-preview__wrapper__selected"
          : "channel-preview__wrapper"
      }
      onClick={() => {
        console.log(channel);
      }}
    >
      {type === "team" ? <ChannelPreview /> : <DirectPreview />}
    </div>
  );
};

export default TeamChannelPreview;
