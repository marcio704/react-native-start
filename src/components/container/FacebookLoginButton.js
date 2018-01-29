import React, { Component } from 'react';
import FBSDK from 'react-native-fbsdk';

var createReactClass = require('create-react-class');

export const FacebookLoginButton = createReactClass({
  render: function() {
    const { LoginButton } = FBSDK;
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
                        alert("Login was successful with permissions: " + result.grantedPermissions);
                        navigate('Main', {});
                    }
                }
          }
          onLogoutFinished={ () => alert("User logged out") }
        />
    );
  }
});