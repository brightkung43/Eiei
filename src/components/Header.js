import React, { useState , Text ,View} from 'react';
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
import firebase from '../firebase/firebase'
  
//const count = useSelector(selectEmail);
//const dispatch = useDispatch();
import { selectEmail, setEmail } from '../state/emailState';
import { useSelector, useDispatch } from 'react-redux';
import FlatList from 'flatlist-react';
import { Link } from 'react-router-dom';
import {setisSignedIn,selectisSignedIn} from '../state/issign'

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let email = useSelector(selectEmail);
   /* if(emails==''){
        if(localStorage.getItem('email') != '')
        email
    }*/
    const rememberMe = localStorage.getItem('email') ;
    const dispatch = useDispatch();
    
    if(email != rememberMe){
        email = localStorage.getItem('email')
    }
    //
    
    // const rememberMe = localStorage.getItem('email') ;
    // const email = rememberMe ? localStorage.getItem('email') : '';
  
    return(
                <div >
                    <Navbar color="dark" light expand="md">
                       <Link to = '/'><NavbarBrand  className='text-white'   > <img style={{height:50,width:150}} src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/afd2765d-7a27-4e6b-b1d1-3a0b8034da68/de0r05u-47c344f7-c205-4b8e-a9b6-b414571b2ac0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYWZkMjc2NWQtN2EyNy00ZTZiLWIxZDEtM2EwYjgwMzRkYTY4XC9kZTByMDV1LTQ3YzM0NGY3LWMyMDUtNGI4ZS1hOWI2LWI0MTQ1NzFiMmFjMC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.4IlSp25O7ATGHtWdRTBg7kGq5G831lRB-QoRe5FohJ4' /></NavbarBrand></Link>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <div style={{width:450}}></div>
                            <NavItem>
                            <NavLink  className='text-white' href="/InsideScreen">Shirt</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink  className='text-white' href="T_shirtScreen">T-Shirt</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret  className='text-white'>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem  >
                                Option 1
                                </DropdownItem>
                                <DropdownItem>
                                Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem  >
                                Reset
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText className="text-center" style={{width:190}} className='text-white'>{email}</NavbarText>
                        {email ?
                         <Link to = '/'><NavbarText className="text-center"   className='text-white' onClick = {()=>{firebase.auth().signOut() ;
                            window.location.reload(false);
                            dispatch(setEmail(""));
                            dispatch(setisSignedIn(false))
                            localStorage.setItem('email', "");
                            localStorage.setItem('isSignedIn', false);
                        }}> Logout </NavbarText></Link>
                         : 
                        <Link to = '/MyLoginScreen'> <NavbarText  className='text-white'>Login</NavbarText></Link>}
                        </Collapse>
                        <Link to = '/CartScreen'><img style={{height:30,width:130}} src="https://www.flaticon.com/svg/static/icons/svg/2121/2121815.svg"  /></Link>
                    </Navbar>
                </div>
    );
}

