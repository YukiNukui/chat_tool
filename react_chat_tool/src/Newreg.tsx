import React from 'react';
import './Newreg.css';

function Newreg() {
  return (
      <div className="Newreg">
        <form className="Newreg-form" method="POST" action="aaa.cgi">
          <p className="Newreg-title">新規登録</p>
          <hr className="Hr-top"/>
          <p className="Newreg-ID">ID</p>
          <input type="text" name="ID" placeholder="ID" className="Input-box"/>
          <p className="Newreg-pass">パスワード</p>
          <input type="password" name="pass" placeholder="パスワード" className="Input-box"/>
          <button className="Newreg-button">新規登録</button>
          <hr className="Hr-bottom"/>
          <a href="aaa" className="Newreg-newlink"><p className="Newreg-linktext">&lt;&lt; ログイン画面に戻る</p></a>
        </form>
    </div>
  );
}

export default Newreg;
