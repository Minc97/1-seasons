import * as React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay  from './SeasonDisplay';

class App extends React.Component<any, any> {

    getPosition: any = () => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        )
    };

    render(): any {
        return <SeasonDisplay />
    }
}

ReactDom.render(<App />, document.querySelector('#root'));

