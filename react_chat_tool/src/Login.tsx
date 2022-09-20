import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css"

const flaskServer = axios.create({
  baseURL: "http://localhost:8000" 
});

async function handleSubmit () {
     await flaskServer.post('/login' , {
      ID: "abcdef",
      pass: "12346789"
    })
      .then((response) => {
      alert(response.data.result);
      })
      .catch((error) => 
    alert('通信に失敗しました'+error));
}

function Login( { Message } :  { Message: { title: string; button: string; link: string; linkto: string; bgclass: string; formaction: string; }; } ) {

  return (
    <div className={Message.bgclass}>
      <form className="Login-form" onSubmit={handleSubmit} method="GET" action="" >
        <p className="Login-title">{Message.title}</p>
        <hr className="Hr-top"/>
        <p className="Login-ID">ID</p>              {/* 入力必須・半角英数のみ許可(スペースは含まない) */}
        <input type="text" name="ID" placeholder="ID" className="Input-box" required pattern="^[0-9A-Za-z]+$"/>
        <p className="Login-pass">パスワード</p>      {/* 入力必須・半角英数のみ許可(スペースは含まない) */}
        <input type="password" name="pass" placeholder="パスワード" className="Input-box" required pattern="^[0-9A-Za-z]+$"/>
        <button className="Login-button" formAction={Message.formaction} //onClick={}
        >{Message.button}</button>
        <hr className="Hr-bottom"/>
        <Link to={Message.linkto} className="Login-newlink"><p className="Login-linktext">{Message.link}</p></Link>
      </form>
    </div>
  );
};

  export default Login;