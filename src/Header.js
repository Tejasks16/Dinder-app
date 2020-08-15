import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import {Link, useHistory} from "react-router-dom"; 
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Header.css';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header_wrapper">
           {backButton ? (
               <IconButton onClick={() => history.replace(backButton)}>
                   <ArrowBackIcon className="header_icon" fontSize="large"/>
               </IconButton>
           ) : (
            <IconButton>
                <AccountCircleIcon className="header_icon" fontSize="large"/>
            </IconButton>
           )}
            
            <Link to ="/">
                <img 
                className="header_logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" 
                alt="logo"/>
            </Link>
            <Link to="/chat">
            <IconButton>
                <ForumIcon className="header_icon" fontSize="large"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
