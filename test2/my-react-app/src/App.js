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

    return ( <
        >
        <
        div className = "content" >
        <
        video autoPlay muted loop style = { videoStyles } >
        <
        source src = { process.env.PUBLIC_URL + '/stars.mp4' }
        type = "video/mp4" / >
        <
        /video>  <
        div className = "container" >
        <
        a href = "#" >
        <
        span > Tickets Booking < /span>  < /
        a > <
        a href = "#" >
        <
        span > Parking Spot < /span>  < /
        a >

        <
        /
        div > <
        /div>   < / >

    );
}

export default App;