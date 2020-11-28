import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, NavLink, Row, Col } from 'reactstrap';
import Login from './Login'

const MyLogin = (props) => {
  return (
    <div style={{height:1080,backgroundImage: 'url("https://images.hdqwalls.com/download/vaporwave-zl-1920x1080.jpg")'}}> 
    {/* <Row>
        <Col>
            <Row></Row>
            <Row style = {{marginTop: 200, backgroundColor: 'white'}}>
                <Col style={{backgroundColor: 'white'}}></Col>
                <Col sm = "5">
                    <Form>
                        <header>
                            <h1 className='title'> Login </h1>
                        </header>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Your E-mail" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Your password" />
                            </FormGroup>
                        <NavLink color="Link" href="/components/" style={{marginLeft: 530, marginTop: -10}}>sign up</NavLink>
                        <Button>SIGN IN</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            <Row></Row>
        </Col>
      
    </Row> */}
     <div style={{height:300}}>


    </div> 
    <div >
        <Login />
    </div>
    </div>
    
  );
}

export default MyLogin