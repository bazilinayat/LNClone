import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    ) 

  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='https://m.media-amazon.com/images/I/71sgtpB-rxL.jpg' alt='someimage'/>
        <Avatar className='sidebar__avatar'/>
        <h2>Bazil Inayat</h2>
        <h4>someemail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
            <p>Who viewed you?</p>
            <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,448</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengeering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
