import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";
const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} width={30} />
        </div>
      </div>
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={LogoutIcon} width={30} />
        </div>
      </div>
    </div>
  );
};
const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
};
interface IChannelContainerListProps {} //define the props coming up in this
const ChannelContainerList: React.FunctionComponent<
  IChannelContainerListProps
> = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          //   channelRenderFilterFn={()=>{}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          //   channelRenderFilterFn={()=>{}}
          List={(listProps) => <TeamChannelList {...listProps} type="messaging" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelContainerList;
