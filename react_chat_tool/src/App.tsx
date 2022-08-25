import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Chat from './Chat';

type Message = {
  title : string;
  button : string;
  link : string;
  linkto : string;
  bgclass : string;
  formaction :string;
}

const loginMessage : Message = {
  title : "X.1 入社課題チャット ログイン" ,
  button : "ログイン",
  link : "新規登録はこちら",
  linkto : "/Newreg",
  bgclass : "Login",
  formaction : "./Chat"
}

const NewregMessage : Message = {
  title : "新規登録" ,
  button : "新規登録",
  link : "<< ログイン画面に戻る",
  linkto : "/",
  bgclass : "Newreg",
  formaction : ""
}

const Talk : string = "プロジェクトは読者記事が明示する月ですん中、承諾しれペディアから利用者必要の.ドメインにしれのでは定めで、フェアの一つは、提供し条件で執筆従いことに従って引用同様たますてくださいたで。また、ライセンスの創作法は、自身の公表する投稿適法ない人物と-し、その従をするて目的を引用下げことへ引用なるれな。またはが、著作ユースで編集するればください方法に少なくとも定めしことは、利用んませ、一部というは投稿権の投稿についてペディア・プロジェクト上の問題はありことが、本例証毎は、可能の演説が応じて文献を著作さなけれているますで。";

function App() {
  return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login Message = {loginMessage} />} />
        <Route path='/Newreg' element={<Login Message = {NewregMessage} />}/>
        <Route path='/Chat' element={<Chat Talk = {Talk}/>}/>
      </Routes>
    </Router>
  </div>
  );
};

export default App;