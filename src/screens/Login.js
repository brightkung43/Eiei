import React, { useState , Text ,View,Component} from 'react';
import '../App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  UncontrolledCarousel, 
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row

} from 'reactstrap';

import FlatList from 'flatlist-react';
import Slidebar from '../components/Slidebar';
import { Link } from 'react-router-dom';
import ShoppingList from '../components/ShoppingList';
import Header from '../components/Header';
import firebase from '../firebase/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';

function Login  () {
    const email = useSelector(selectEmail);
     const dispatch = useDispatch();
     const [isSignedIn,setisSignedIn] = useState(false)
    // The component's Local state.

    
    // Configure FirebaseUI.
    let uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google , Facebook , Etc as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
      }
    };
    firebase.auth().onAuthStateChanged(
        (user) => {
                if(user == null)setisSignedIn(false)
                else setisSignedIn(true);
        if(isSignedIn){
            dispatch(setEmail(firebase.auth().currentUser.email))
            localStorage.setItem('email', email);
            
        }
        else
        {
            dispatch(setEmail(""))
            localStorage.setItem('email', "");
        

        }
        
    }
    );
    // Listen to the Firebase Auth state and set the local state.
    /*componentDidMount() {
          
       
      console.log(this.state.isSignedIn)
      
    }
    
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
      this.unregisterAuthObserver();
    } 
    */
    
    
    
       
        
    

        
   if(!isSignedIn ) {return (

            
          <div className="container">
            {/* <h1>Login</h1> */}
            
  
            {/* <p>Please sign-in:</p> */}
            <StyledFirebaseAuth uiConfig={{
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // We will display Google , Facebook , Etc as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        // Avoid redirects after sign-in.
        signInSuccess: () => false
        
      }
    }} firebaseAuth={firebase.auth()}/>
          </div>
       
        //this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
          //  (user) => {setisSignedIn(!!user)   }
        
           
        
      
      
      
   )}
        else{
            return(
        <div className="container">
          <h1>FirebaseUI-React</h1>
          <h1> with Firebase Authentication</h1>
         
          <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
          <p>Welcome {firebase.auth().currentUser.email}! You are now signed-in!</p>
            <img id="photo" className="pic" src={firebase.auth().currentUser.photoURL}/>
            <div style={{marginTop:50}}>
                 <button onClick={() => {firebase.auth().signOut()
                setisSignedIn(false)
                }}>Sign-out</button>
            </div>
         
        </div>
     )
            }
    }
  
  export default Login;