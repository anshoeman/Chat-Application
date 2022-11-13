import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch } from "./";
import Cookies from "universal-cookie";
import HospitalIcon from "../assets/hospital.png";
import LogoutIcon from "../assets/logout.png";
import TeamChannelList from "./TeamChannelList";
import TeamChannelPreview from "./TeamChannelPreview";

const cookies = new Cookies()
const SideBar: ({ logout }: {
  logout: any;
}) => JSX.Element = ({ logout }) => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={HospitalIcon} alt="Hospital" width="30" />
        </div>
      </div>
      <div className="channel-list__sidebar__icon2">
        <div className="icon1__inner" onClick={logout}>
          <img src={LogoutIcon} alt="Logout" width="30" />
        </div>
      </div>
    </div>
  )
};
const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">Medical Pager</p>
    </div>
  );
};
interface IChannelContainerListProps {
  isEditing: boolean | undefined,
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>,
  isCreating: boolean | undefined,
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>,
  setCreateType: React.Dispatch<React.SetStateAction<string>>
} //define the props coming up in this

const ChannelContainerList: React.FunctionComponent<
  IChannelContainerListProps
> = ({ isCreating, isEditing, setIsCreating, setCreateType, setIsEditing }) => {
  const logout: () => void = () => {
    cookies.remove('token')
    cookies.remove('fullname')
    cookies.remove('userId')
    cookies.remove('avatarURL')
    cookies.remove('username')
    cookies.remove('hashedPassword')
    cookies.remove('phoneNumber')

    window.location.reload()
  }
  return (
    <>
      <SideBar logout={logout} />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          List={(listProps) =>
            <TeamChannelList
              {...listProps}
              type="team"
              setIsEditing={setIsEditing}
              isCreating={isCreating}
              setIsCreating={setIsCreating}
              setCreateType={setCreateType}
            />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps}
              type="team"
            />
          )}
        />
        <ChannelList
          filters={{}}
          //   channelRenderFilterFn={()=>{}}
          List={(listProps) => 
          <TeamChannelList 
          {...listProps} 
          type="messaging"
          setIsEditing={setIsEditing}
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType} />
          }
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
};

export default ChannelContainerList;
