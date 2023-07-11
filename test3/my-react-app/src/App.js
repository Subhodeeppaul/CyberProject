import React from 'react';
import './App.css';

function App() {
    const videoStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
    };

    return (
        <>
            <div className="content">
                <video autoPlay muted loop style={videoStyles}>
                    <source src={process.env.PUBLIC_URL + '/bg2.mp4'} type="video/mp4" />
                </video>
                <div className="container">
                    <div className="box">
                        <h1>List of States / Cities</h1>
                        <ul>
                            <li><span></span>Kolkata</li>
                            <li><span></span>Delhi</li>
                            <li><span></span>Maharashtra</li>
                            <li><span></span>Tamil Nadu</li>
                            <li><span></span>Karnataka</li>
                            <li><span></span>Madhya Pradesh</li>
                            <li><span></span>Andhra Pradesh</li>
                            <li><span></span>Uttar Pradesh</li>
                            <li><span></span>Jammu and Kashmir</li>
                            <li><span></span>Uttarakhand</li>
                            <li><span></span>Rajasthan</li>
                            <li><span></span>Meghalaya</li>
                            <li><span></span>Manipur</li>
                            <li><span></span>Jharkhand</li>
                            <li><span></span>Tripura</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
