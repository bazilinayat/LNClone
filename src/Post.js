import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbsUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

function Post({ name, description, message, photoUrl,  }) {
  return (
    <div className='post'>
        <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>

        <div className='post__body'>
            <p>{message}</p>
        </div>

        <div className='post__buttons'>
            <InputOption Icon={ThumbsUpAltOutlinedIcon} title='Like' colour='gray' />
            <InputOption Icon={ChatOutlinedIcon} title='Comment' colour='gray' />
            <InputOption Icon={ShareOutlinedIcon} title='Share' colour='gray' />
            <InputOption Icon={SendOutlinedIcon} title='Send' colour='gray' />
        </div>
    </div>
  )
}

export default Post
