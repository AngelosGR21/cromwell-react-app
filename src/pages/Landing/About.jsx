import { Icon } from '@mui/material';

import SecurityIcon from '@mui/icons-material/Security';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import "./About.css"

const About = () => {
    return (
        <section id="about" className="landing-about-container">
            <h2 className="landing-about-main-header">WHY CHOOSE US?</h2>
            <div className="landing-about-options-container">

                <div className="landing-about-info-container">
                    <div>
                        <Icon className="landing-about-icon">
                            <PriceCheckIcon className="landing-about-icon" />
                        </Icon>
                        <h3 className="landing-about-header">Best Price</h3>
                    </div>
                    <p className="landing-about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod perspiciatis modi corrupti, nulla unde assumenda impedit deserunt sed totam</p>
                </div>
                <div className="landing-about-info-container">
                    <div className="landing-about-icon-container">
                        <Icon className="landing-about-icon">
                            <SpeedIcon className="landing-about-icon" />
                        </Icon>
                        <h3 className="landing-about-header">Quick Process</h3>
                    </div>
                    <p className="landing-about-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, natus. Delectus, assumenda perferendis. Praesentium pariatur maxime sint odit mollitia autem aut in</p>
                </div>
                <div className="landing-about-info-container">
                    <div className="landing-about-icon-container">
                        <Icon className="landing-about-icon">
                            <SecurityIcon className="landing-about-icon" />
                        </Icon>
                        <h3 className="landing-about-header">Property Insurance</h3>
                    </div>
                    <p className="landing-about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sed, hic magnam atque laudantium eaque voluptas molestias nisi et, accusantium quas qui</p>
                </div>
                <div className="landing-about-info-container">
                    <div className="landing-about-icon-container">
                        <Icon className="landing-about-icon">
                            <SupportAgentIcon className="landing-about-icon" />
                        </Icon>
                        <h3 className="landing-about-header">Support</h3>
                    </div>
                    <p className="landing-about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magni provident officiis nesciunt sequi, fuga incidunt quidem quia rem</p>
                </div>
            </div>
        </section>
    )
}

export default About