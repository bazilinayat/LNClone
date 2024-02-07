import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG15.png' alt='LinkedIn' />

        <div className='header__search'>
            <SearchIcon />
            <input type='text' />
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='home' />
        <HeaderOption Icon={PeopleIcon} title='My Network' />
        <HeaderOption Icon={WorkIcon} title='Job' />
        <HeaderOption Icon={MessageIcon} title='Messages'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='../public/octo.png' title='Me' />
      </div>
    </div>
  )
}

export default Header;