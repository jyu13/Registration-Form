/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React from 'react';
import {Container, Button, Row, Col} from 'reactstrap';
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
            width: '60vw',
            height: '50vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'           
        };

        return(
                
                <div>
    <div className ="text-center">
    <h3>Results Vertification Page by Arnold Jiadong Yu</h3>
    </div>
    <style> {'body {background-color: lightgrey;}'} </style> 
    
    <Container>
       <Button color = "primary" href = '/' size = 'lg' >Back</Button>
       <p></p>
       
        <div className ="text-center"><h4>Below are information you submitted.</h4></div>
       <Row>
       <Col sm={3}><h5>Last Name:</h5></Col>
       <Col sm= {9}> <h5>{this.props.lastname} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>First Name:</h5></Col>
       <Col sm= {9}> <h5>{this.props.firstname} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Street:</h5></Col>
       <Col sm= {9}> <h5>{this.props.street} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Suite:</h5></Col>
       <Col sm= {9}> <h5>{this.props.suite} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>City:</h5></Col>
       <Col sm= {9}> <h5>{this.props.city} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>State:</h5></Col>
       <Col sm= {9}> <h5>{this.props.state} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Zip Code:</h5></Col>
       <Col sm= {9}> <h5>{this.props.zipcode} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Education:</h5></Col>
       <Col sm= {9}> <h5>{this.props.education} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Income Yearly:</h5></Col>
       <Col sm= {9}> <h5>{this.props.income} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Phone Number:</h5></Col>
       <Col sm= {9}> <h5>{this.props.phone} </h5></Col>    
       </Row>
       <p></p>
       <Row>
       <Col sm={3}><h5>Email:</h5></Col>
       <Col sm= {9}> <h5>{this.props.email} </h5></Col>    
       </Row>
             
    <div className = "text-center"><h4>Your address on Map</h4>
    <div id ="map" style ={style}></div>
    <p></p>
    </div>
    </Container>  
         
                
                
            </div>     
                );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAt7_xQYGAgXHLxk0jS9GcPwD5P2P_i74Q'
})(result);