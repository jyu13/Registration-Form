/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import {Container, Col, Button,  FormGroup, Label, Input, FormText} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import {withRouter} from 'react-router-dom';

class Example extends React.Component {
    constructor(props) {
    super(props);
    
        this.updateLast = this.updateLast.bind(this);
        this.updateFirst = this.updateFirst.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateZip = this.updateZip.bind(this);
        this.updateEdu = this.updateEdu.bind(this);
        this.updateIncome = this.updateIncome.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.checkCharater = this.checkCharater.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        }
        
        updateLast(event){
            this.props.onChangeLast(event.target.value);
        }
        updateFirst(event){
            this.props.onChangeFirst(event.target.value);
        }
        updateAddress(event){
            this.props.onChangeAddress(event.target.value);
        }
        updateCity(event){
            this.props.onChangeCity(event.target.value);
        }
        updateState(event){
            this.props.onChangeState(event.target.value);
        }
        updateZip(event){
            this.props.onChangeZip(event.target.value);
        }
        updateEdu(event){
            this.props.onChangeEdu(event.target.value);
        }
        updateIncome(event){
            this.props.onChangeIncome(event.target.value);
        }
        updatePhone(event){
            this.props.onChangePhone(event.target.value);
        }
        updateEmail(event){
            this.props.onChangeEmail(event.target.value);
        }
        updateSubmit(event){
            //event.preventDefault();
            event.persist();
            //this.props.onChangeTermSubmit();
            this.props.history.push('/Result');
            
        }
        checkCharater(event){
            const re = /[a-zA-Z ]+/g;
            if(!re.test(event.key)){
                event.preventDefault();
            }
        }
        checkNumber(event){
            const re = /[0-9]+/g;
            if(!re.test(event.key)){
                event.preventDefault();
            }
        }
        
        render() {
    return (
            <div>
    <div className ="text-center">
    <h3>Registration Form</h3>
    </div>
    <style> {'body {background-color: lightgrey;}'} </style>
            <Container>
            
      <AvForm onValidSubmit = {this.updateSubmit}>
     
        <AvGroup row>
          <Label sm={2}>Last Name*</Label>
          <Col sm={10}>
            <AvField type="text" name="last" id="exampleLast" placeholder="Ex: Yu" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateLast} required/>
            <FormText>Please enter characters only.</FormText>
          </Col>
        </AvGroup>
        
        <AvGroup row>
          <Label sm={2}>First Name*</Label>
          <Col sm={10}>
            <AvField type="text" name="first" id="exampleFirst" placeholder="Ex: Arnold" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateFirst} required/>
            <FormText>Please enter characters only.</FormText>
          </Col>
        </AvGroup>
     
     
        <AvGroup row>
          <Label sm={2}>Address*</Label>
          <Col sm={10}>
            <AvField type="text" name="address" id="exampleAddress" placeholder="Ex: 1600 Hollow Way" maxLength = '40'  onChange = {this.updateAddress} required/>
            <FormText>Please enter address.</FormText>
          </Col>
        </AvGroup>
        
        
        <AvGroup row>
          <Label sm={2}>City*</Label>
          <Col sm={3}>
            <AvField type="text" name="city" id="exampleCity" placeholder="Ex: San Francisco" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateCity} required/>
            <FormText>Please enter city.</FormText>
          </Col>
          
           <Label sm={1}>State*</Label>
          <Col sm={2}>
            <AvField type="select" name="state" id="state"  maxLength = '40'  onChange = {this.updateState} required>
            <option></option>
            
            <option>Alabama </option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option> West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
            </AvField>
            <FormText>Please choose state.</FormText>
          </Col>
           <Label sm={2}>Zip Code*</Label>
          <Col sm={2}>
            <AvField type="text" name="zipcode" id="zipcode" placeholder="Ex: 94132" minLength ='5' maxLength = '5' onKeyPress = {(e)=>this.checkNumber(e)} onChange = {this.updateZip} required/>
            <FormText>Posstive 5 digits.</FormText>
          </Col>
        </AvGroup>
        
        
        
        
        
        
        
        
        <FormGroup row>
          <Label sm={2}>Education</Label>
          <Col sm={4}>
            <Input type="select" name="selectEdu" id="exampleEdu" onChange = {this.updateEdu}>
            <option></option>
            <option>High School</option>
            <option>College</option>
            <option>Graduate Studies</option>
            <option>Ph.D</option>
            </Input>
            <FormText>Please choose education level.</FormText>
          </Col>
          <Label sm={2}>Income Yearly</Label>
          <Col sm={4}>
            <Input type="select" name="selectIncome" id="exampleIncome" onChange = {this.updateIncome}>
            <option></option>
            <option>Less than $50k</option>
            <option>Between $50-100k</option>
            <option>Above $100k</option>
            </Input>
            <FormText>Please choose income.</FormText>
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label sm={2}>Email</Label>
          <Col sm={10}>
            <AvField type="text" name="email" id="email" placeholder="Ex: arnoldyu@yahoo.com" maxLength = '40'  onChange = {this.updateEmail}/>
            <FormText>Please enter email.</FormText>
          </Col>
        </FormGroup>
        
        <AvGroup row>
          <Label sm={2}>Phone*</Label>
          <Col sm={10}>
            <AvField type="text" name="phone" id="phone" placeholder="Ex: 4153381111" minLength = '10' maxLength = '10' onKeyPress = {(e) =>this.checkNumber(e)} onChange = {this.updatePhone} required/>
            <FormText>Please enter phone number.</FormText>
          </Col>
        </AvGroup>


        
        <AvGroup row>
          <Label sm={2}>Enter PW*</Label>
          <Col sm={10}>
            <AvField type="password" name="password" id="password" placeholder ="Minlength 7 and Maxlength 20" minLength = '7' maxLength ='20' required/>
            <FormText>Please enter password.</FormText>        
          </Col>
        </AvGroup>
        <AvGroup row>
          <Label sm={2}>Confirm PW*</Label>
          <Col sm={10}>
            <AvField type="password" name="repassword" id="repassword" placeholder ="Re-type password" validate={{match:{value:'password'}}} required/>
            <FormText>Please re-enter the same password.</FormText>  
          </Col>
        </AvGroup>
        
        
        <FormGroup row>
          <Label sm={2}></Label>
          <Col sm={{ size: 10 }}>
              <Label check>             
                <p>* is required field.</p>
              </Label>
          </Col>
        </FormGroup>
        
        
        <FormGroup row>
          <Label sm={2}></Label>
          <Col sm={{ size: 10 }}>
            <AvGroup check>
              <Label check>
                <AvInput type="checkbox" name= "checkbox" id="checkbox" required/>
                <Button color = "link" href = '/' >I agree to terms.*</Button>
                <FormText>Must agree before submit.</FormText>
              </Label>
            </AvGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color = 'primary'>Submit</Button>
            <p></p>
          </Col>
        </FormGroup>
      </AvForm>
      </Container>
      <p></p>
      
      </div>
      
      );
  }
}

export default withRouter(Example);