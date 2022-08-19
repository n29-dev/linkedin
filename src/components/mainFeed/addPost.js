import React from 'react'
import Button from '../globals/Button'
import { Avatar } from '@mui/material'
import { CalendarMonth, InsertPhoto, PostAdd, SmartDisplay } from '@mui/icons-material'


const AddPost = React.forwardRef(({}, ref) => {
    return (
        <div className="addPost__container">
        <div className="addPost__input__avatar__container">
          <div className='addPost__avatar__container'>
            <Avatar />
          </div>
          <div className='addPost__inputBox__container'>
            <input type="text" placeholder='Start a post' ref={ref}/>
          </div>
        </div>
        <div className='addPost__options__container'>
          <Button Icon={InsertPhoto} text={'Photo'} />
          <Button Icon={SmartDisplay} text={'Video'} />
          <Button Icon={CalendarMonth} text={'Event'} />
          <Button Icon={PostAdd} text={'Write Article'} />
        </div>
      </div>
      )
})

export default AddPost;