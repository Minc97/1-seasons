import * as React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay  from './SeasonDisplay';

class App extends React.Component<any, any> {

    render(): any {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return <h1>Lattitude: </h1>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));

