import React, { Component } from 'react';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateStorageItem } from 'movies/src/actions/storage';

class FacebookLoginButton extends Component {
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
                                    this.props.updateStorageItem("loginState", 
                                    { 
                                        from: 'Facebook',
                                        token: data
                                    });
                                }
                            );
                            navigate('Main', {});
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
    return bindActionCreators({ updateStorageItem, }, dispatch);
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(FacebookLoginButton);