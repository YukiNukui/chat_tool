import React from 'react';
import ChatMentionItems from './ChatMentionItems';
import "./ChatMention.css"

function ChatMention( Contents : { TalkInfo : { time : string; talk : string; }; } ){
    return(
        <div className="Mention">
            <div className="Mention-header">メンション</div>
            <hr className="Mention-hr-top" />
            <div className="Mention-flexbox">
                <div className="Mention-channelname">#Channel_Name</div>
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
                {<ChatMentionItems TalkInfo = {Contents.TalkInfo} />}
            </div>
            <hr className="Mention-hr-bottom" />
            <a href="aaa" className="Mention-continue"><p className="Mention-linktext">続きを読み込む</p></a>
        </div>
            );
        };
        
export default ChatMention;