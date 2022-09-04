import React from 'react';
import Post from './post';
import { db } from '../../firebase';
import {useEffect, useState} from 'react';
import {collection, onSnapshot} from 'firebase/firestore';
import '../../styles/post.css'

function Posts() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "posts"), 
      (snapshot) => {
        setPosts(snapshot.docs)
        console.log(snapshot.docs)
        setLoading(false)
      },
      (error) => {
        console.log(error)
      });

      return unsubscribe;
  }, [])

  return (
    <div className='postsContainer'>
        { !loading &&
            posts.map((post, index) => {
                const {message, userName, userDesignation, created} = post.data();
                return (<Post message={message} key={index + Math.random()} userName={userName} userDesignation={userDesignation} created={created || 'Just now'}/>);
            })
        }
    </div>
  )
}

export default Posts