import React from "react";
import GitIcon from "../assets/GitHub Icon.svg";
import InstaIcon from "../assets/Instagram Icon.png";
// add Socials as button and logos. Position at bottom of card

export default function SocialsFooter() {
    return (
        <div className="socials">
            <a href="https://github.com/realiru" className="icon">
                <img src={GitIcon} alt="github logo" />
            </a>

            <a href="https://github.com/realiru" className="icon">
                <img src={InstaIcon} alt="Instagram logo" />
            </a>
        </div>
    )
}