import React, { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "../assets";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState<Boolean>(true);

  const onSearch = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    setLoading(false);
    setQuery(e.target.value);
  };

  const getChannels = async()=>{
    try {
        
        
    } catch (error) {
        setQuery('')
    }
  }
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="search"
          type="text"
          value={query}
          onChange={(e) => onSearch(e)}
        />
      </div>
    </div>
  );
};

export default ChannelSearch