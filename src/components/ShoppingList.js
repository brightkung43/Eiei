import React, { Component,useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row,ListGroup,
    Modal, ModalHeader, ModalBody, ModalFooter, Col 
  } from 'reactstrap';



export default function ShoppingList(props){
    const classes = useStyles();
    let item = [

    
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อหลุย', price: 199},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'เสื้อดำ', price: 399},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:499},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},
                {image: 'https://scontent.fbkk11-1.fna.fbcdn.net/v/t1.0-9/126329327_1515994261944941_4003126549141028566_n.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_eui2=AeGDo8GxGpO0Rx-ahF6Eh6hQbVHmPNkl1fdtUeY82SXV9699HeUKP97cfznpLFiWLJI0mt_86s9vY1n6tCp0wEID&_nc_ohc=WduYugqWMOcAX-MDeB5&_nc_ht=scontent.fbkk11-1.fna&oh=25f33894ba57440016c85957d1b43dff&oe=5FE07583', name: 'Correia', price:599},

    ]             
            
    const {
        buttonLabel,
        className
      } = props;
    
      const [modal, setModal] = useState(false);
      const toggle = () => setModal(!modal);

      const currencies = [
        {
          value: 'S',
          label: 'S',
        },
        {
          value: 'M',
          label: 'M',
        },
        {
          value: 'L',
          label: 'L',
        },
        {
          value: 'XL',
          label: 'XL',
        },
      ];

      const [currency, setCurrency] = React.useState('EUR');
      const handleChange = (event) => {
        setCurrency(event.target.value);
      };
  
        return (
            <div className={classes.root}>
        <ListGroup style={{height:500,width:"80%",marginLeft:145}}>
            <Row sm="5" style={{alignItems:'center'}} >
                        {item.map(listitem => (
                <ButtonBase onClick={toggle}
                focusRipple
                key={""}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: 180,
                }}
                >
            
            <Card style={{alignItems:'center',height:370,width:250,marginBottom:10,borderWidth:1,borderColor:'secondary'}}>
                <CardImg top width="100%" style={{height:250,width:224,marginTop:10}} src={listitem.image} alt="Card image cap" /> 
                <CardBody>
                <CardTitle style={{fontSize:25}}>{listitem.name}</CardTitle>
                <CardText>{listitem.price}</CardText>
                </CardBody>

                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle} style={{backgroundColor:'red'}}>รายละเอียดสินค้า</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <img  style={{height:250,width:224,marginTop:10}} src={listitem.image} alt="Card image cap" /> 
                            </Col>
                            <Col>

                                <p style={{fontSize:25}}>{listitem.name}</p>
                                <p>{listitem.price}</p>
                                <TextField
                                id="filled-select-currency"
                                select
                                label="Select Size"
                                value={currency}
                                onChange={handleChange}
                                helperText="Please select your size"
                                variant="filled"
                                >
                                {currencies.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                                    <br/>
                                <Row>
                                    <Col sm="3">
                                        <p>จำนวน</p>
                                    </Col>
                                    
                                    <Col>
                                        <TextField style={{width:40}}  />
                                    </Col>
                                    
                                </Row>    
                                
                                    
                                
                            </Col>
                        </Row>
                        
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>เพิ่มในตะกร้า</Button>{' '}
                    </ModalFooter>
                    </Modal>
                </Card>
            
        </ButtonBase>))}
     </Row>
     </ListGroup>
    </div>
   
  );
    }
  


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 385,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
      },
      imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
      },
      imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      },
      imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
    }));