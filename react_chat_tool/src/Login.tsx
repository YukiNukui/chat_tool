import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css"

function Login( { Message } :  { Message: { title: string; button: string; link: string; linkto: string; bgclass: string; formaction: string; }; } ) {
    return (
        <div className={Message.bgclass}>
          <form className="Login-form" //method="POST" action=""
          >
            <p className="Login-title">{Message.title}</p>
            <hr className="Hr-top"/>
            <p className="Login-ID">ID</p>
            <input type="text" name="ID" placeholder="ID" className="Input-box"/>
            <p className="Login-pass">パスワード</p>
            <input type="password" name="pass" placeholder="パスワード" className="Input-box"/>
            <button className="Login-button" formAction={Message.formaction} >{Message.button}</button>
            <hr className="Hr-bottom"/>
            <Link to={Message.linkto} className="Login-newlink"><p className="Login-linktext">{Message.link}</p></Link>
          </form>
        </div>
    );
  };

  export default Login;