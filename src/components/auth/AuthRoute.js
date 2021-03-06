



import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from 'providers/AuthProvider';


// const AuthRoute = ({component: Component, ...rest}) => {
    const AuthRoute = ({children, ...rest}) => {
const authService = useAuth();
const onlyChild = React.Children.only(children);

  return (
    <Route {...rest} render={(props) => authService.isAuthenticated() ?
    //    <Component {...rest} {...props}/> : <Redirect to={{pathname: '/login'}} />  } />
       React.cloneElement(onlyChild, {...rest, ...props}) : 
       <Redirect to={{pathname: '/login'}} />  } />
  )
}

export default AuthRoute; 