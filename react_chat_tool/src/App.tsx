import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Login.css';
import Newreg from './Newreg';

function Login() {
  return (
      <div className="Login">
        <form className="Login-form" method="POST" action="aaa.cgi">
          <p className="Login-title">X.1 入社課題チャット ログイン</p>
          <hr className="Hr-top"/>
          <p className="Login-ID">ID</p>
          <input type="text" name="ID" placeholder="ID" className="Input-box"/>
          <p className="Login-pass">パスワード</p>
          <input type="password" name="pass" placeholder="パスワード" className="Input-box"/>
          <button className="Login-button">ログイン</button>
          <hr className="Hr-bottom"/>
          <Link to="/Newreg" className="Login-newlink"><p className="Login-linktext">新規登録はこちら</p></Link>
        </form>
      </div>
  );
}

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/Newreg' element={<Newreg />}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
