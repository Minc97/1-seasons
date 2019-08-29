import * as React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay  from './SeasonDisplay';

class App extends React.Component<any, any> {
    state = {
        latitude: null,
        errorMessage: ''
    };
    componentDidMount(): void {
    window.navigator.geolocation.getCurrentPosition(
        position => {this.setState({ latitude: position.coords.latitude })},
        error => {this.setState({ errorMessage: error.message })}
    )};
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void {
        console.log('My component was just updated')
    }
    // React says we have to define render!
    render(): any {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error: {this.state.errorMessage} </div>
        } else if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        } else {
            return <div>Loading...</div>
        }
    }
}

ReactDom.render(<App />, document.querySelector('#root'));

