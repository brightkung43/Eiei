import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './screens/Home';
import T_shirt from './screens/T_shirt';
import Cart from './screens/Cart';
import Inside from './screens/Inside';
import MyLogin from './screens/MyLogin'
import SignUp from './screens/SignUp';
import { createBrowserHistory } from 'history';
import {
  BrowserRouter,
  Link,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header';

function App() {
  
  return (
    
    <div className="App">
     
      <BrowserRouter history={createBrowserHistory()}  >
      <div>
      
      <Switch>
          
          <Route exact path="/" component={Home}/> 
          <Route exact path="/T_shirtScreen" component={T_shirt}/>
          <Route path="/CartScreen" component={Cart}/>
          <Route path="/InsideScreen" component={Inside}/>
          <Route path="/MyLoginScreen" component={MyLogin}/>
          <Route path="/SignInScreen" component={SignUp}/>
       
        </Switch>
        </div>
        </BrowserRouter>
    
    </div>
    
  );
}

export default App;
