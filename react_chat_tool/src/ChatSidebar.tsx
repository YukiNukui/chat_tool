import React from 'react';
import "./ChatSidebar.css"

function ChatSidebar () {
    return(
        <div className="Sidebar-flexbox">
            <div className="Channellist-title">チャンネルリスト</div>
                <div className="Channellist-item">
                    <div className="CList-Each-item">#channel_1</div>
                    <div className="CList-Each-item">#channel_2</div>
                    <div className="CList-Each-item">#channel_3</div>
                    <div className="CList-Each-item">#channel_4</div>
                </div>
            <div className="DM">ダイレクトメッセージ</div>
            <div className="DM-item-flexbox">
                <img className="DM-icon" src="aaa" />
                <div className="DM-each-item">Takahiro</div>
            </div>
            <div className="DM-item-flexbox">
                <img className="DM-icon" src="aaa"/>
                <div className="DM-each-item">Tanashun</div>
            </div>
        </div>
    );
};

export default ChatSidebar;