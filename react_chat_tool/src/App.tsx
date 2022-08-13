import React from 'react';
import './Login.css';

function App() {
  return (
      <div className="Login">
        <form className="Login-form" method="POST" action="aaa.cgi">
          <p className="Login-title">X.1 入社課題チャット ログイン</p>
          <hr className="Hr-top"/>
          <p className="Login-ID">ID</p>
          <input type="text" name="ID" placeholder="ID" className="Input-box"/>
          <p className="Login-pass">パスワード</p>
          <input type="password" name="pass" placeholder="パスワード" className="Input-box"/>
          <input type="submit" value="ログイン" className="Login-button" />
          <hr className="Hr-bottom"/>
          <a href="aaa" className="Login-newlink"><p className="Login-linktext">新規登録はこちら</p></a>
        </form>
    </div>
  );
}

export default App;
