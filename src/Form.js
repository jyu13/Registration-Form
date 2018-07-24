/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React from 'react';
import {Container, Col, Button,  FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback } from 'availity-reactstrap-validation';
import {withRouter} from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

class Example extends React.Component {
    constructor(props) {
    super(props);
        this.state = {
            recaptcha: ' ',
            disable : true,
            modal: false
        };
        this.updateLast = this.updateLast.bind(this);
        this.updateFirst = this.updateFirst.bind(this);
        this.updateStreet = this.updateStreet.bind(this);
        this.updateSuite = this.updateSuite.bind(this);
        this.updateCity = this.updateCity.bind(this);
        this.updateState = this.updateState.bind(this);
        this.updateZip = this.updateZip.bind(this);
        this.updateEdu = this.updateEdu.bind(this);
        this.updateIncome = this.updateIncome.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePwd = this.updatePwd.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.checkCharater = this.checkCharater.bind(this);
        this.checkNumber = this.checkNumber.bind(this);
        this.onChangeReCaptcha = this.onChangeReCaptcha.bind(this);
        this.toggle = this.toggle.bind(this);
        }

        toggle() {
            this.setState({ modal: !this.state.modal});
        }
        
        updateLast(event){
            this.props.onChangeLast(event.target.value);
        }
        updateFirst(event){
            this.props.onChangeFirst(event.target.value);
        }
        updateStreet(event){
            this.props.onChangeStreet(event.target.value);
        }
        updateSuite(event){
            this.props.onChangeSuite(event.target.value);
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
        updatePwd(event){
            this.props.onChangePwd(event.target.value);
        }
        /*    if(!this.state.recaptcha ||  this.state.recaptcha.trim().length === 0){
                alert("Please check ReCAPTCHA");
            }else{
                
                this.setState({disable: false});
            }*/
        updateSubmit(event){
            //event.preventDefault();
            event.persist();          
            //only works with invisible captcha
            //window.captcha.execute();
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
        
        onChangeReCaptcha(event){
            this.setState({
                recaptcha: event
            });
            if(!this.state.recaptcha ||  this.state.recaptcha.trim().length === 0){
                alert("Please check ReCAPTCHA");
            }else{
                
                this.setState({disable: false});
            }
        }
        
        render() {
    return (
            <div>
    <div className ="text-center">
    <h1>Registration Form</h1>
    </div>
    <style> {'body {background-color: lightgrey;}'} </style>
            <Container>
            
      <AvForm onValidSubmit = {this.updateSubmit}>
     
        <AvGroup row>
          <Col ml={6}>
            <AvField label = "First Name*" type="text" name="first" id="exampleFirst" placeholder="Ex: Arnold" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateFirst} required/>
            <FormText>Please enter characters only.</FormText>
          </Col>
          <Col sm={6}>
            <AvField label = "Last Name*" type="text" name="last" id="exampleLast" placeholder="Ex: Yu" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateLast} required/>
            <FormText>Please enter characters only.</FormText>
          </Col>
          
        </AvGroup>
        
        <FormGroup row >
        <Col sm={8}>
        <AvGroup>
          
            <AvField label = "Street*" type="text" name="street" id="street" placeholder="Ex: 1600 Hollow Way" maxLength = '40'  onChange = {this.updateStreet} required/>
            <FormText>Please enter address.</FormText>
            </AvGroup>
          </Col>
          
          <Col sm={4}>
            <AvField label = "Suite" type="text" name="suite" id="suite" placeholder="Ex: Apt 308" maxLength = '40'  onChange = {this.updateSuite} />
        <FormText>Please enter suite.</FormText>     
          </Col>
          </FormGroup>

        
        
        <AvGroup row>
          <Col sm={5}>
            <AvField label = "City*" type="text" name="city" id="exampleCity" placeholder="Ex: San Francisco" maxLength = '40' onKeyPress = {(e)=>this.checkCharater(e)} onChange = {this.updateCity} required/>
            <FormText>Please enter city.</FormText>
          </Col>
          
          <Col sm={4}>
            <AvField  label = "State*" type="select" name="state" id="state"  maxLength = '40'  onChange = {this.updateState} required>
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
          <Col sm={3}>
            <AvField label= "Zip Code*"type="text" name="zipcode" id="zipcode" placeholder="Ex: 94132" minLength ='5' maxLength = '5' onKeyPress = {(e)=>this.checkNumber(e)} onChange = {this.updateZip} required/>
            <FormText>Posstive 5 digits.</FormText>
          </Col>
        </AvGroup>
        
        
        <FormGroup row>
          <Col sm={6}>
            <AvField label = "Education Level" type="select" name="selectEdu" id="exampleEdu" onChange = {this.updateEdu}>
            <option></option>
            <option>High School</option>
            <option>College</option>
            <option>Graduate Studies</option>
            <option>Ph.D</option>
            </AvField>
            <FormText>Please choose education level.</FormText>
          </Col>
          <Col sm={6}>
            <AvField label ="Income Yearly " type="select" name="selectIncome" id="exampleIncome" onChange = {this.updateIncome}>
            <option></option>
            <option>Less than $50k</option>
            <option>Between $50-100k</option>
            <option>Above $100k</option>
            </AvField>
            <FormText>Please choose income.</FormText>
            </Col>
            </FormGroup>
        
        <FormGroup row> 
            <Col sm={6}>
            <AvGroup>  
            
            <AvField label = "Phone Number*" type="text" name="phone" id="phone" placeholder="Ex: 4153381111" minLength = '10' maxLength = '10' onKeyPress = {(e) =>this.checkNumber(e)} onChange = {this.updatePhone} required/>
            <FormText>Please enter phone number.</FormText>  
            
            </AvGroup>
            </Col>
          
          <Col sm={6}>
            <AvField label = "Email" type="text" name="email" id="email" placeholder="Ex: arnoldyu@yahoo.com" maxLength = '40'  onChange = {this.updateEmail}/>
            <FormText>Please enter email.</FormText>     
            </Col>
          </FormGroup>

       


        
        <AvGroup row>    
          <Col >
            <AvField label = "Enter Password*" type="password" name="password" id="password" placeholder ="Minlength 7 and Maxlength 20" minLength = '7' maxLength ='20' onChange = {this.updatePwd} required/>
            <FormText>Please enter password.</FormText>        
          </Col>
        </AvGroup>
        <AvGroup row>
          <Col >
            <AvField label = "Confirm Password*"type="password" name="repassword" id="repassword" placeholder ="Re-type password" validate={{match:{value:'password'}}} required/>
            <FormText>Please re-enter the same password.</FormText>  
          </Col>
        </AvGroup>
        
        
        <FormGroup row>
          <Col >   
                <p>* is required field.</p>
                </Col>
                </FormGroup>
                
        <AvGroup check>          
              <AvInput type="checkbox" name="checkItOut" required/>
              <a style= {{color: 'blue', 'text-decoration': 'underline', cursor: 'pointer'}} onClick = {this.toggle}>I agree to terms.*</a>  
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Registration Form Terms of Service</ModalHeader>
          <ModalBody>Effective Date: July 22, 2018
          <div>This is for testing only.</div>
                </ModalBody>
            
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Ok</Button>{' '}
          </ModalFooter>
        </Modal>
              <FormText>Must check before submit</FormText>
              <AvFeedback>Must check before submit.</AvFeedback>
              <p></p>
              
          </AvGroup>
        <AvGroup row>  
          <Col> 
        <ReCAPTCHA ref = 'recaptcha' sitekey = '6Lexk2UUAAAAAB0VjRd4QT8cL_aqBKeCX8x4Cjau' onChange = {this.onChangeReCaptcha}/>
        <FormText>Must check reCAPTCHA before submit.</FormText>
          </Col>
        </AvGroup>
        
        
                <div></div>
        
        <p></p>
        
        <FormGroup check row>
            <Button color = 'primary' size = "lg" block disabled = {this.state.disable}>Submit</Button>
                    <FormText className = "text-center">Submit button will become available after check reCAPTCHA.</FormText>
        </FormGroup>
      </AvForm>
      </Container>
      <p></p>
      
      </div>
      
      );
  }
}

export default withRouter(Example);