import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, changeOtherVariable } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '1006045874740-rlrc7s8v2nqn8s2p8pnq3oaubebmlefo.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                console.log(this.auth);
            })
        })
    }

    signIn = (props) => {
        console.log(this.props);
        this.props.signIn(123);
        console.log(this.props);
        this.props.changeOtherVariable();     
        this.auth.signIn();
    }

    render() {
        return (
            <div>GoogleAuth
                <button onClick={this.signIn}>Login with Google</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, { signIn, signOut, changeOtherVariable })(GoogleAuth);