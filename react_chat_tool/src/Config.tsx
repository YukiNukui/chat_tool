import React from 'react';
import { Link } from "react-router-dom";
import "./Config.css"

function Config ( Info : { PersonalInfo : { name : string; iconpass : string; }; } ) {
    return(
        <div className="Config-flexbox">
            <div className="Config-header-flexbox">
                <div className="Config-headericon-flexbox">
                    <img className="Config-icon" src={Info.PersonalInfo.iconpass} />
                    <Link to="aaa" className="Config-iconchange-link" >変更する</Link>
                </div>
                <div className="Config-headername-flexbox">
                    <div className="Config-name">{Info.PersonalInfo.name}</div>
                    <div className="Config-IDchange">IDを変更する</div>
                </div>
            </div>
            <hr className="Config-hr" />
            <form>
                <div className="Config-title">パスワード変更</div>
                <input className="Config-pass" type="passward" placeholder='パスワード'></input>
                <input className="Config-pass" type="passward" placeholder='パスワード'></input>
                <button className="Config-changebutton"><p className="Config-changebutton-text">変更する</p></button>
            </form>
        </div>
    );
};

export default Config;