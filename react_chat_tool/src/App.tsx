import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';

type Message = {
  title : string;
  button : string;
  link : string;
  linkto : string;
  bgclass : string;
}

const loginMessage : Message = {
  title : "X.1 入社課題チャット ログイン" ,
  button : "ログイン",
  link : "新規登録はこちら",
  linkto : "/Newreg",
  bgclass : "Login"
}

const NewregMessage : Message = {
  title : "新規登録" ,
  button : "新規登録",
  link : "<< ログイン画面に戻る",
  linkto : "/",
  bgclass : "Newreg"
}


function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login Message = {loginMessage} />} />
        <Route path='/Newreg' element={<Login Message = {NewregMessage} />}/>
      </Routes>
    </Router>
  </div>
  );
};

export default App;
