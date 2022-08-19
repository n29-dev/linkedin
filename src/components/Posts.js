import React from 'react';
import Post from './Post'

function Posts(postsArray) {
  return (
    <div className='postsContainer'>
        { postsArray.length > 0 && 
            postsArray.map((post) => {
                const {message, docId, userName, userDesignation, timestamp} = post;
                <Post message={message} key={docId} userName={userName} userDesignation={userDesignation} timestamp={timestamp}/>
            })
        }
    </div>
  )
}

export default Posts