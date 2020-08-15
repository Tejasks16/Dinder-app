import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButtons.css'

const SwipeButtons = () => {
    return (
        <div className="swipeButton">
            <IconButton className="swipeButton_replay">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton_close">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton_star">
                <StarIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton_favorite"> 
            <   FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButton_flash">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons

