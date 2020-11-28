import React, { Component } from "react";


import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row,ListGroup
  
  } from 'reactstrap';

export default class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            listitems: [
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
    }
}

    render(){
        return (
            
      <ListGroup style={{height:500,width:"80%",marginLeft:145}}>
     
       
             <Row sm="5" style={{alignItems:'center'}} >
                {this.state.listitems.map(listitem => (
                 <Card style={{alignItems:'center',height:370,width:224,marginBottom:10,borderWidth:1,borderColor:'secondary'}}>
                    <CardImg top width="100%" style={{height:250,width:224,marginTop:10}} src={listitem.image} alt="Card image cap" /> 
                    <CardBody>
                    <CardTitle style={{fontSize:25}}>{listitem.name}</CardTitle>
                    <CardText>{listitem.price}</CardText>
                    </CardBody>
                </Card>
          
        ))
        }
          </Row>
        
         
         
      </ListGroup>
   
  );
    }
  
}

