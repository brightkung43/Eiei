import React, { useState ,Component } from "react";


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,  Container, Row,ListGroup,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,Button,
    Col,ButtonDropdown,UncontrolledButtonDropdown
  } from 'reactstrap';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import Link from '@material-ui/core/Link';

export default class Cart extends Component{
    constructor(props){
        super(props);
        
            this.state={
                cartNum:0,
                listitems: [
                    {image: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/69721f2e7c934d909168a80e00818569_9366/M20324_720_M20324_01_standard.jpg.jpg', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/c40bf1d0d5124bcd8ea8abd4011f8275_9366/FY8852_540_FY8852_01_standard.jpg.jpg', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อดำ', price: 399},
                    {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:499},
     
    
                    
                ],
            }
            
    }

    
    render(){
        return(
            <div>
                <div>
                    <Header />
                </div>
                
                

            <Row  className='justify-contents-top' style={{marginBottom:30}}>
            <Col md = '2'></Col>
            <Col md = '5' >
                <div  className="text-left " style={{margin:20}}>
                  <span  style={{fontSize:28,fontWeight:'bold'}}>ตะกร้าของคุณ</span> &nbsp;&nbsp;<span style={{fontSize:20,}}>{this.state.cartNum}  รายการ</span>  
                </div>

                <ListGroup style={{}}>
                    {this.state.listitems.map(listitem => (
                     <Col  className = "border-top border-lightgray"style={{borderColor:'red' }}>  
                        <Col className="text-left " style={{height:152,borderWidth:10,borderColor:'secondary',marginTop:20}}>     
                            <Row >
                                <Col sm="3">
                                    <img  top  style={{height:130,width:130}} src={listitem.image} alt="Card image cap" />
                                </Col>
                                
                                <Col sm="5">
                                    <h1  style={{marginLeft:-20,fontSize:18,fontWeight:'bold',}}>{listitem.name}</h1> 
                                    <Link style={{borderWidth:false}} component="button" variant="body2" onClick={() => {console.info("I'm a button.") }}>ลบ</Link>
                                </Col>
                                  
                                <Col className="text-right">
                &nbsp;&nbsp;&nbsp;<UncontrolledButtonDropdown>
                                    <DropdownToggle caret style={{backgroundColor:'black'}}>
                                        1 &nbsp;
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>1</DropdownItem>
                                        <DropdownItem disabled>2</DropdownItem>
                                        <DropdownItem>3</DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>4</DropdownItem>
                                    </DropdownMenu>
                                    </UncontrolledButtonDropdown>

                                    &nbsp; &nbsp;&nbsp;&nbsp;฿ 50000
                                </Col>
                                

                             
                            </Row> 
                            
                           
                        </Col>  
    
    
                       
                    </Col>
                   
                    ))
                    }
           
                      
                   
                </ListGroup> 
                <div  className="text-left " style={{marginLeft:10,marginTop:5}}>
                     <Button style={{height:55,width:170,backgroundColor:'black'}} >ชำระเงิน</Button>
             
   
                </div>  
            </Col>
    
          <div  className="text-left " style={{height:330,width:350,marginLeft:10,marginTop:75,padding:10,backgroundColor:'#ebebeb',justifyItems:'top',alignItems:'top'}}>
            <Button style={{backgroundColor:'black',height:50,width:"100%"}}>ชำระเงิน</Button>
            <p style={{fontSize:20,fontWeight:'bold',marginTop:10}}>สรุปคำสั่งซื้อ</p>
    
            <div  style={{height:200,width:330,backgroundColor:'white'}}>
                <div style={{marginLeft:10}}>
                    <p  >{this.state.cartNum} ชิ้น</p>
                    <p class="conclude-product" style={{}}>รวมสินค้าทั้งหมด &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;฿</p>
                    <p class="conclude-product" style={{}}>การจัดส่ง</p>
                    <p class="conclude-product" style={{fontWeight:'bold'}}>รวม</p>
                </div>
            </div>
          </div>
    
          </Row>
          </div>

            
               
            
        );
    }
}

