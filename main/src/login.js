import React from "react";

function clickMe() {
    alert("Clicked");
}

export default function App() {
    return ( <
        div >
        <
        button onClick = { clickMe } >
        Admin <
        /button> <
        /div>
    );
}