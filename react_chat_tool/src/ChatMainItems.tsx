import React from 'react';
import "./ChatMain.css"

function ChatMainItems ( Contents : { TalkInfo : { time : string; talk : string; }; } ) {
    const count : number = 3;
    return(
        <div>
            <div className="Talk-box-flexbox">
                <img className="Talk-icon" src="aaa" />
                <div className="Talk-contents-flexbox">
                    <div className="Talk-header">
                        <div className="Talk-name">Keigo Kubo</div>
                        <div className="Talk-time">{Contents.TalkInfo.time}</div>
                    </div>
                    <div className="Talk-sentence">{Contents.TalkInfo.talk}</div>
                    <input className="Talk-good" type="checkbox" id="Goodbutton"/>
                    <label className="Talk-good-label" htmlFor="Goodbutton">♥{count}</label>
                </div>
            </div>
        </div>
    );
};

export default ChatMainItems;