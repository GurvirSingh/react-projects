import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
// const App = () => {
    // window.navigator.geolocation.getCurrentPosition(
    //     (position) => console.log(position), (err) => console.log(err)
    // );

//     return (
//         <div>Latitude: </div>
//     );
// };


// class based component in React
class App extends React.Component {
    constructor (props) {
        // we need to call super, calls the constructor of the props  
        super(props);

        this.state = {lat: null, errorMessage : ''}; // our state object 
        // we can get this.state from any function in our class
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         this.setState({ lat: position.coords.latitude })
        //     },
        //     (err) => {
        //         this.setState({errorMessage: err.message});
        //     }
        // );
    }

    // state = {lat: null, errorMessage: ''}; inside the constructor this is equal, we would not need the constructor if we define this here , 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude })
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }
     
    // we borrow this from react.component 
    // React says we have to define render!! 
    render() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <div>Loading...</div>
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => console.log(position), (err) => console.log(err)
        // );
        // return (<div>Latitude: {this.state.lat} Error: {this.state.errorMessage}</div>);
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));