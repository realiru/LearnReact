import React from "react";
export default function PersonalInfo() {
    return (
        <div className="personalinfo">
            <h1 className="personalinfo--name">Hamzah Patel</h1>
            <h2 className='personalinfo--title'>Computer Science Student</h2>
            {/* Insert website once launched */}
            <a className='personalinfo--website' href="https://www.google.com/"> hamzah.website</a>
        </div>
    )
}