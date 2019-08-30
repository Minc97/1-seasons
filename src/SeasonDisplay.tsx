import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: 'It\'s so hot!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr.. it\'s chilly',
        iconName: 'snowflake'
    }
};

const getSeason = (latitude: number, month: number) => {
    if (month > 2 && month < 9) {
        return latitude > 0 ? 'summer' : 'winter';
    } else {
        return latitude > 0 ? 'summer' : 'winter';
    }
};

const SeasonDisplay: any = (props: any): any => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season]; // { text, iconName }
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;