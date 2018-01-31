import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default class FacebookLoginButton extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    render () {
        const { navigate } = this.props.navigation;

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
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                  alert(data.accessToken.toString())
                                }
                            )
                            //alert("Login was successful with permissions: " + result.grantedPermissions);
                            navigate('Main', {});
                        }
                    }
            }
            onLogoutFinished={ () => alert("User logged out") }
            />
        );
    }
};