import React from "react";
import Mail from '../assets/Mail.svg';
import Linkedin from '../assets/Linkedin.svg';

export default function Buttons() {
    return (
        <div className="buttons">
            <button className="buttons--email">
                <p><img src={Mail}/>Test</p>
                </button>
            <button className="buttons--linkedin">
                <p> <img src={Linkedin}/>Test</p>
                </button>
            </div>
    )
    }