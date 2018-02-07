import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { login } from 'movies/src/actions/login';

class FacebookLoginButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    render () {
        const { navigation } = this.props;

        return (
            <LoginButton
                publishPermissions ={ ["publish_actions"] }
                onLoginFinished = {
                    (error, result) => {
                        if (error) {
                            alert("Login failed with error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("Login was cancelled");
                        } else {
                            this.props.login(navigation);
                        }
                    }
                }
                onLogoutFinished={ () => alert("User logged out") }
            />
        );
    }
};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login, }, dispatch);
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton);