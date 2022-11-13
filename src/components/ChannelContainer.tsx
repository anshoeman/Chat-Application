import React, { useEffect, useState } from "react";
import { useChatContext, Channel, MessageText, Message} from "stream-chat-react";
import { SearchIcon } from "../assets";
import { ChannelInner, EditChannel, TeamMessage, CreateChannel } from './'


interface IChannelContainer {
   isEditing: boolean | undefined,
   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
   isCreating: boolean | undefined,
   setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
   createType: string | undefined
}
const ChannelContainer: React.FC<IChannelContainer> = ({ isCreating, isEditing, setIsCreating, setIsEditing, createType }) => {
   const { channel } = useChatContext();
   if (isCreating) {
      return (
         <div className="channel__container">
            <CreateChannel createType={createType} setIsCreating={setIsCreating} />
         </div>
      )
   }

   if (isEditing) {
      return (
         <div className="channel__conatiner">
            <EditChannel setIsEditing={setIsEditing} />
         </div>
      )
   }
   const EmptyState = () => (
      <div className="channel-empty__container">
         <p className="channel-empty__first">This is the beginning of your chat history.</p>
         <p className="channel-empty__second">Send messages, attachments, links, emojis, and more!</p>
      </div>
   )

   return (
      <div className="channel__container">
      <Channel
          EmptyStateIndicator={EmptyState}
          Message={TeamMessage}
      >
          <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
  </div>
   )
};

export default ChannelContainer;
