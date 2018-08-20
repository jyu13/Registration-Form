/* 
 * @author Arnold Jiadong Yu
 * @name CSC642
 * @description Second Page of Registration Form, return Input from First Page
 */


import React from 'react';
import {Container, Col, Button,  FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import {GoogleApiWrapper} from 'google-maps-react';

class result extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            address: this.props.address+' '+this.props.city+ ' '+ this.props.state + ' ' +this.props.zipcode,
            test: "new york"
        };
    }
    componentDidMount(){
        var map = new window.google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: {lat: -34.397, lng: 150.644}
        });
        var geocoder = new window.google.maps.Geocoder();
        
        geocoder.geocode({'address': this.state.address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            const marker = new window.google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
    }
    
    shouldComponentUpdate(props){
        return props.search;
    }
    render(){
        
        const style = {
            width: '30vw',
            height: '50vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'           
        };

        return(
                
                <div>
    <div className ="text-center">
    <h1>Results Vertification Page by Arnold Jiadong Yu</h1>
    </div>
    <style> {'body {background-color: lightgrey;}'} </style> 
    
    <Container>
       
       <p></p>
       
        <div className ="text-center"><h3>Below are information you submitted.</h3></div>
        <p></p>
        <AvForm>
        <AvGroup row>
          <Col ml={6}>
            <AvField label = "First Name*" type="text" name="result-first" id="result-first"   value = {this.props.firstname}  disabled/>
            <FormText>Please enter characters only.</FormText>
          </Col>
          <Col sm={6}>
            <AvField label = "Last Name*" type="text" name="result-last" id="result-last"  value = {this.props.lastname} disabled/>
            <FormText>Please enter characters only.</FormText>
          </Col>
          
        </AvGroup>
        
        <FormGroup row >
        <Col sm={8}>
        <AvGroup>
          
            <AvField label = "Street*" type="text" name="result-street" id="result-street" value = {this.props.street} disabled />
            <FormText>Please enter address.</FormText>
            </AvGroup>
          </Col>
          
          <Col sm={4}>
            <AvField label = "Suite" type="text" name="result-suite" id="result-suite"  value = {this.props.suite} disabled />
        <FormText>Please enter suite.</FormText>     
          </Col>
          </FormGroup>
          
          <AvGroup row>
          <Col sm={5}>
            <AvField label = "City*" type="text" name="result-city" id="result-city"value = {this.props.city} disabled/>
            <FormText>Please enter city.</FormText>
          </Col>
          
          <Col sm={4}>
            <AvField  label = "State*" type="text" name="result-state" id="result-state"  value = {this.props.state} disabled/>
            
            <FormText>Please choose state.</FormText>
          </Col>
          <Col sm={3}>
            <AvField label= "Zip Code*"type="text" name="result-zipcode" id="result-zipcode" value = {this.props.zipcode} disabled/>
            <FormText>Posstive 5 digits.</FormText>
          </Col>
        </AvGroup>
        
        
        <FormGroup row>
          <Col sm={6}>
            <AvField label = "Education Level" type="text" name="result-education" id="result-education" value = {this.props.education} disabled />
            <FormText>Please choose education level.</FormText>
          </Col>
          <Col sm={6}>
            <AvField label ="Income Yearly " type="text" name="result-icome" id="result-income" value = {this.props.income} disabled />

            <FormText>Please choose income.</FormText>
            </Col>
            </FormGroup>
        
        <FormGroup row> 
            <Col sm={6}>
            <AvGroup>  
            
            <AvField label = "Phone Number*" type="text" name="result-phone" id="result-phone" value = {this.props.phone} disabled/>
            <FormText>Please enter phone number.</FormText>  
            
            </AvGroup>
            </Col>
          
          <Col sm={6}>
            <AvField label = "Email" type="text" name="result-email" id="result-email" value = {this.props.email} disabled/>
            <FormText>Please enter email.</FormText>     
            </Col>
          </FormGroup>

       
        
        </AvForm>
             
    <div className = "text-center"><h4>Your address on Map</h4>
    <div id ="map" style ={style}></div>
    <p></p>
    </div>
    <p></p>
    <div>
    <Button color = "primary" href = '/' size = 'lg' block>Back To Registration Form</Button>
    </div>
    <p></p>
    </Container>  
         
                
                
            </div>     
                );
    }
}

export default GoogleApiWrapper({
    apiKey: 'Your_Key'
})(result);