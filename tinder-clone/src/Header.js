import React from 'react'
import './Header.css'
import logo_amuyo_tinder from './logo/tinder_png.png'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header_icon'/>
            </IconButton>

            <img src={logo_amuyo_tinder} className='header_logo' alt="logo"/>
            
            <IconButton>
                <ForumIcon fontSize='large' className='header_icon'/>
            </IconButton>
            
        </div>
    )
}

export default Header
