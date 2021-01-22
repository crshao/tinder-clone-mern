import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton"

function Header() {
    return (
        <div className="header">
            <h1>This is a header</h1>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
            <img
                className="header__logo"
                src="C:\Users\hao\Documents\Project\tinder-clone-mern\media\images\tinderlogo.png"
                alt=""
            />
        </div>
    )
}

export default Header
