


import React from 'react';
import { connect } from 'react-redux';
import { loginUser , userAuthenticated } from 'actions';
import jwt from 'jsonwebtoken';
import moment from 'moment';


const { createContext,useContext } = React;

const AuthContext = createContext(null);

const AuthBaseProvider = ({children, dispatch}) => {

  const checkAuthState = () => {
    // alert('Checking Auth State');
    const decodedToken = decodeToken(getToken());
    if (decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken))
    }
  }

  const isAuthenticated = () => {
    // const token = getToken();
    // if (!token) { return false; }
    // const decodedToken = decodeToken(token);
    // return isTokenValid(decodedToken)
    const decodedToken = decodeToken(getToken());
    return decodedToken && isTokenValid(decodedToken)
  }

  const isTokenValid = (decodedToken) => {
    return decodeToken && moment().isBefore(getExpiration(decodedToken));
  }


  const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  }

  const getToken = () => {
    return localStorage.getItem('bwm_token');
  }


  const decodeToken = token => {
    return jwt.decode(token);
  }

  const signOut = () => {
    localStorage.removeItem('bwm_token');
    dispatch({type: 'USER_SIGNED_OUT'});
  }


  const signIn = (loginData) => {
    return loginUser(loginData)
      .then(token => {
        localStorage.setItem('bwm_token', token);
        const decodedToken = decodeToken(token);
        // dispatch({
        //   type: 'USER_AUTHENTICATED',
        //   username: decodedToken.username || ''
        // })
        dispatch(userAuthenticated(decodedToken))
        return token;
      })
  }
  const authApi = {
    signIn,
   checkAuthState,
    signOut,
    isAuthenticated
  }

  return (
    <AuthContext.Provider value={authApi}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthProvider = connect()(AuthBaseProvider);

export const useAuth = () => {
  return useContext(AuthContext);
}


export const withAuth = Component => props => (
    <AuthContext.Consumer>
      {authApi => <Component {...props} auth={authApi} /> }
    </AuthContext.Consumer>
  )
