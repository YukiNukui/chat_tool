import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';
import ChatMention from './ChatMention';
import Config from './Config';
import "./Chat.css"

function Chat( Info : { PersonalInfo : { name : string; iconpass : string; };
                        TalkInfo : { time : string; talk : string; }; } ){
    return(
        <div className="Chat-app">
            <div className="Header-flexbox">
                <div><img className="Header-icon" src={Info.PersonalInfo.iconpass} /></div>
                <div className="Header-name">Keigo</div>
                <label className="Header-triangl" htmlFor="Config-menu-button">▼</label>
                <input className="Config-menu-button" type="checkbox" id="Config-menu-button"/>
                <div className="Config-menu">{<Config PersonalInfo = {Info.PersonalInfo}/>}</div>
            </div>
            <div className="Main-flexbox">
                {<ChatSidebar />}
                {<ChatMain TalkInfo = {Info.TalkInfo}/>}
                {<ChatMention TalkInfo = {Info.TalkInfo}/>}
            </div>
        </div>
    );
};

export default Chat;