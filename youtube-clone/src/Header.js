import React from 'react'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';


function Header() {
    return (
        <div className = "header">
        <div className = "header_logo">
        <MenuSharpIcon/>
        <img  src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""/>
        </div>
        
         
        <div className ="header_input">
        <input placeholder = "Search" type="text" />
        <SearchSharpIcon/>
        </div>  

        <div className="header_icons">
        <VideoCallSharpIcon/>
           <AppsSharpIcon/>
           <NotificationsActiveSharpIcon/>
           <AccountCircleSharpIcon/>

        </div>   
           
           
        </div>
    )
}

export default Header
