import { Button } from '@mui/material';
import React from 'react'

import MailOutlineIcon from '@mui/icons-material/MailOutline';

const HouseCard = ({ house }) => {
    const { img, title, description } = house;
    return (
        <article className="home-card">
            <img className="home-card-image" src={img} alt="house" />
            <div className="home-card-info-container">
                <div>
                    <h3 className="home-card-title">{title}</h3>
                    <p className="home-card-paragraph">{description}</p>
                </div>
                <div className="home-card-button-container">
                    <Button
                        className="home-card-button"
                        variant="contained"
                    >
                        View More
                    </Button>
                    <Button
                        startIcon={<MailOutlineIcon />}
                        className="home-card-button"
                        variant="contained"
                    >
                        Contact
                    </Button>
                </div>
            </div>
        </article>
    )
}

export default HouseCard