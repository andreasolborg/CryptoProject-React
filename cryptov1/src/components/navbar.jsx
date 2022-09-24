import * as React from 'react';
import { useEffect } from 'react';
import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GroupIcon from '@mui/icons-material/Group';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
//import logo from './../images/TekstLogo.svg';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


import './navbar.css';

export default function Navbar() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let pos = currentTab();

    if (pos >= 0) {
      setValue(pos);
    }

  }, []);


  const currentTab = () => {
    const path = window.location.pathname

    switch (path) {
      case "/myGroups":
        return 0;
      case "/matches":
        return 1;
      case "/groups":
        return 2;
      case "/creategroup":
        return 3;
      case "/user":
        return 4;
      default:
        return -1;
    }
  }


  return (
    <div className='Navbar'>
      <Tabs value={value} onChange={handleChange} aria-label="navbar">
        <Tab
          aria-label="home"
          to="/home"
          component={Link}
          id="navbarHome"
          icon={
            <img
              alt="test avatar"
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/2560px-Coinbase.svg.png"}
              variant="rounded"
              height={35}
            />
          }
        />

        <Tab
          icon={<AttachMoneyIcon />}
          aria-label="money"
          to="/portofolio"
          component={Link}
          id="navbarMatch"
        />

        <Tab
          icon={<GroupIcon />}
          aria-label="groups"
          to="/groups"
          component={Link}
          id="navbarGroup"
        />

        <Tab
          icon={<AddBoxIcon />}
          aria-label="chat"
          to="/creategroup"
          component={Link}
          id="navbarChat"
        />

        <Tab
          icon={<PersonPinIcon />}
          aria-label="profile"
          iconPosition="end"
          label="Min profil"
          to="/user"
          component={Link}
          id="navbarUser"
        />

      </Tabs>
    </div>
  );
}