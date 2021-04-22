import './SeasonDisplay.css';
// webpack does this for us;
import React from 'react';


const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
        return lat > 0 ? 'SUMMMER ' : 'WINTERr'; 
    } else  {
        return lat < 0 ? 'SUMMMER ' : 'WINTERr'; 
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());

    return (
        <div><h1>{ season === "WINTERr" ? 'BRUH ITS CHILLY MAN!' : "LETS HIT THE BEACH BRUH UHU"}</h1></div>
    );
};

export default SeasonDisplay;
