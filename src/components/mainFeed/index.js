import '../../styles/mainFeed.css';
import AddPost from './addPost';
import MainFeedSlider from './mainFeedSlider';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useEffect, useCallback} from 'react';
import {useAuth} from '../../contexts/AuthContext'
import React from 'react';
import Posts from './posts';
const collectionRef = collection(db, 'posts')

function MainFeed() {

  const inputRef = React.createRef();
  const {currentUser, additionalInfo} = useAuth();
  
  // add post handler
  const addPostHandler = useCallback((event) => {
    if (event.key === "Enter") {
      // add doc to firestore
      addDoc(collectionRef, {
        uid: currentUser.uid,
        userName: additionalInfo.username,
        userDesignation: additionalInfo.designation,
        message: event.target.value,
        created: serverTimestamp()
      })

      event.target.value = '';
    }
  })

// prob
  useEffect(() => {
    const inpuField = inputRef.current;
    inpuField.addEventListener('keyup', addPostHandler)
  }, [addPostHandler])

  return (
    <div className='mainFeed__container'>
      <AddPost ref={inputRef} />
      <MainFeedSlider />
      <Posts/>
    </div>
  )
}

export default MainFeed;