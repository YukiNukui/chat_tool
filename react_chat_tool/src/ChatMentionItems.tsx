import React from 'react';
import "./ChatMention.css"

function ChatMentionItems( Contents : { Talk :string } ){
    return(
        <div>
        <div className="Mention-box-flexbox">
            <div className="Mention-circle"></div>
            <img className="Mention-icon" src="aaa" />
            <div className="Mention-contents-flexbox">
                <div className="Mention-box-header-flexbox">
                    <div className="Mention-name">Keigo Kubo</div>
                    <div className="Mention-time">20:15</div>
                </div>
                <div className="Mention-sentence">{Contents.Talk}</div>
            </div>
        </div>
        <hr className="Mention-hr-each" />
        </div>
    );
};
        
export default ChatMentionItems;