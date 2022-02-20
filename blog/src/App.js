/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

var toggle = 0;

function App() {

  let [title, setTitle] = useState(['솔로이스트', '릭오웬스', '피스마이너스원']);
  let [likes, setLikes] =  useState(0);
  let [language, setLanguage] = useState('ENGLISH');  

  function changeTitle() {
    let newArray = [...title];
    let newLang = [...language];

    if (toggle == 1) {
      newArray[0] = 'The Soloist';
      newArray[1] = 'Rick Owens';
      newArray[2] = 'PEACEMINUSONE';
      newLang = '한국어';
      toggle--;
    }
    else if (toggle == 0) {
      newArray[0] = '솔로이스트';
      newArray[1] = '릭오웬스';
      newArray[2] = '피스마이너스원';
      newLang = 'English';
      toggle++;
    }
    setTitle(newArray);
    setLanguage(newLang);
  }

  return (
    <div className="App">
     <div className='black-nav'>
       <div>개발 Blog</div>
     </div>
     <button onClick={ () => {changeTitle()} }>{language}</button>
     <div className='list'>
       <h3> {title[0]} 
        <span onClick={ () => {setLikes(likes + 1)}}>🖕</span> 
        {likes} 
        </h3>
       <p>2월 19일 발행</p>
       <hr/>
     </div>
     <div className='list'>
       <h3> {title[1]} 
       <span onClick={ () => {setLikes(likes + 1)}}>🖕</span> 
       {likes}
       </h3>
       <p>2월 19일 발행</p>
       <hr/>
     </div>
     <div className='list'>
       <h3> {title[2]}
       <span onClick={ () => {setLikes(likes + 1)}}>🖕</span>  
       {likes}
      </h3>
       <p>2월 19일 발행</p>
       <hr/>
    </div>

    <Modal></Modal>

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2> 제목 </h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  )
}

export default App;
