import React from 'react';
import ChatSidebar from './ChatSidebar';
import ChatMain from './ChatMain';
import ChatMention from './ChatMention';
import "./Chat.css"

function Chat( Contents : { Talk :string } ){
    return(
        <div className="Chat-app">
            <div className="Header-flexbox">
                <div><img className="Header-icon" src="aaa" /></div>
                <div className="Header-name">Keigo</div>
                <div className="Header-triangl">▼</div>
            </div>
            <div className="Main-flexbox">
                {<ChatSidebar />}
                {<ChatMain Talk = {Contents.Talk}/>}
                {<ChatMention Talk = {Contents.Talk}/>}
            </div>
        </div>
    );
};

export default Chat;