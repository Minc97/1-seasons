import React from 'react';

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
        <div>
            <i className={`${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`${iconName} icon`}/>
        </div>
    );
};

export default SeasonDisplay;