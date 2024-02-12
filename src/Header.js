import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from './features/users/userSlice'
import { auth } from "./handleFirebase";

function Header() {

  const dispatch = useDispatch();

  const logoutToApp = (e) => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pngimg.com/uploads/linkedIn/small/linkedIn_PNG15.png"
          alt="LinkedIn"
        />

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="home" />
        <HeaderOption Icon={PeopleIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Job" />
        <HeaderOption Icon={MessageIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://media.licdn.com/dms/image/C4D03AQHNH1Fw9sOIxg/profile-displayphoto-shrink_800_800/0/1660457970241?e=2147483647&v=beta&t=iSrLGHwo-Fc-WVMLf3hHtjLItrk_I4b4csrkNI_36RU"
          title="Me"
          onClick={logoutToApp}
        />
      </div>
    </div>
  );
}

export default Header;
