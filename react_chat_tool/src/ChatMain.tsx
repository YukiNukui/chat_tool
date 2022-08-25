import React from 'react';
import ChatMainItems from './ChatMainItems';
import "./ChatMain.css"

function ChatMain ( Contents : { Talk :string } ) {
    const count : number = 3;
    return(
        <div className="Main-chat">
            <div className="Main-header">チャンネル名 or DMの相手の名前が入ります</div>
            <hr className="Main-hr"/>
            <div className="Talk-flexbox">
                {<ChatMainItems Talk = {Contents.Talk}/>}
                {<ChatMainItems Talk = {Contents.Talk}/>}
                {<ChatMainItems Talk = {Contents.Talk}/>}
                {<ChatMainItems Talk = {Contents.Talk}/>}
                <div className="Talk-form">
                <form>
                        <input className="Talk-inputbox" type="text" name="text" placeholder="メッセージを入力してください #sample_channel" />
                        <button className="Talk-sendbutton">送信</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatMain;