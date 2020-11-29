import React, { useState , Text ,View} from 'react';
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
import firebase from '../firebase/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';

function Home(props){
    const email = useSelector(selectEmail);
    const dispatch = useDispatch();

    const [image,setImage] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);

   

    
     

    return (
      
            <div >
               <div >
                   <Header />
                   
                </div>
                    

                <div style={{backgroundColor:'black'}}>
                <Slidebar  />
                </div>

                <div style={{margin:50}}>
                    <h2>Best Seller</h2>
                    
                    

                </div>
                

                <div>
                    <ShoppingList/>
                </div>
                
                     

            
                   
                
            </div>
             


    );
}


export default Home;