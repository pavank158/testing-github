

import React, {useEffect} from 'react';
import Header from './components/shared/Header';
import Routes from './Routes';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { AuthProvider,useAuth } from 'providers/AuthProvider';
import { initStore } from './store';

const store = initStore();
// const App = () => {
//  return (
//     <Provider store={store}>
//     <AuthProvider>
//     <Router>
//       <Header />
//       <Routes />
//     </Router>
//   </AuthProvider>
// </Provider>
// )
// }
  const Providers = ({children}) => 
  <Provider store={store}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </Provider>

const BwmApp = () => {
  const authService = useAuth();

  useEffect(() => {
    authService.checkAuthState();
  }, [authService])

  return (
    <Router>
      <Header logout={authService.signOut}  />
      <Routes />
    </Router>
  )
}

const App = () => {
  return(
    <Providers>
      <BwmApp />
    </Providers>
  )
}
export default App;






























// import React from 'react';
// import Header from './components/shared/Header';
// import Routes from './Routes';

// import{ BrowserRouter as Router} from "react-router-dom";
// import { StateContext} from './state-context';
// import store from './store';


// // import {Router, Route} from './components/Testing-Router';
// // import RentalHome from './pages/RentalHome';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import { render } from 'node-sass';

// // import CounterApp from './components/CounterApp/CounterApp';

// const App = () =>{

//   // const renderPages = () =>{
//   //   const {pathname} = window.location;
//   //   //usnig switch
//   //   switch(pathname){
//   //     case'/':
//   //     return<RentalHome/>;
//   //     case'/login':
//   //     return<Login/>;
//   //     case'/register':
//   //     return<Register/>;
//   //     default:
//   //     return <RentalHome/>;
//   //   }

//     //USING IF STATEMENTS
//     // if(pathname ==='/'){
//     //   return<pathname/>;
//     // }else if(pathname === '/login'){
//     //   return<login/>; 
//     // }
    
//   // }

//   return(
//     <StateContext.Provider value={store}>
//       <Router>
//         <Header/>
//         <Routes/>
//       </Router>
//     </StateContext.Provider>
//   )




//   // return (
//   //   <div>
//   //     <Router>
//   //       <Header/>
//   //       <Routes/>
//   //     </Router>
//   //     {/* {renderPages()} */}
//   //     {/* <RentalHome/> */}
//   //   </div>

//   //   // <CounterApp title="My counter aplication"/>
//   // )
// }






// //  const App = () => {
// //     return(
// //       <div >hello world
// //       <h2>what a nice day</h2>
// //       </div> 
  
// //     )
// //   }
  


// // function App(props){
// //     return(
// //       <div classNameName={props.classNameName}><h1>hello world</h1>
// //       <h2>what a nice day</h2>
// //       </div> 
  
// //     )
// //   }
  
//   export default App;


