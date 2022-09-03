import React from 'react';
import Post from './post';
import { db } from '../../firebase';
import {useEffect, useState} from 'react';
import {collection, onSnapshot} from 'firebase/firestore';

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
            posts.map((post) => {
                const {message, docId, userName, userDesignation, timestamp} = post.data();

                return (<Post message={message} key={docId} userName={userName} userDesignation={userDesignation} timestamp={timestamp}/>);
            })
        }
    </div>
  )
}

export default Posts