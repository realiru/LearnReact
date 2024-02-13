import React from "react";
import photoGrid from "../assets/photo-grid.png";

export default function Hero() {
    return (
        <div className="hero">
            <img className="photo-grid" src={photoGrid} alt="photo grid" />
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
        ) 
}