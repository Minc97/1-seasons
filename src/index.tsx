import * as React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay  from './SeasonDisplay';
import Spinner from './Spinner'

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
    toDisplay(){
        if (this.state.errorMessage && !this.state.latitude) {
            return <div> Error: {this.state.errorMessage} </div>
        } else if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay latitude={this.state.latitude}/>
        } else {
            return <div><Spinner message="Please accept locations request"/></div>
        }
    }
    // React says we have to define render!
    render(): any {
        return <div>{this.toDisplay()}</div>
    };
}

ReactDom.render(<App />, document.querySelector('#root'));

