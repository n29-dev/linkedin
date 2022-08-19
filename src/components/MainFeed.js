import '../styles/mainFeed.css';
import AddPost from './AddPost';
import MainFeedSlider from './MainFeedSlider';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect, useRef } from 'react';
import React from 'react';
const collectionRef = collection(db, 'posts')


function MainFeed() {

  const inputRef = React.createRef();

  function addPostHandler(event) {
    if (event.key === "Enter") {
      addDoc(collectionRef, {
        uid: '######',
        userName: 'Nazib talukdar',
        userDesignation: 'Noting',
        message: event.target.value,
        created: serverTimestamp()
      })
    }
  }

  useEffect(() => {
    const inpuField = inputRef.current;
    console.log(inputRef.current)
    inpuField.addEventListener('keyup', addPostHandler)
  })

  return (
    <div className='mainFeed__container'>
      <AddPost ref={inputRef} />
      <MainFeedSlider />
    </div>
  )
}

export default MainFeed;