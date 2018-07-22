import React, { Component } from 'react';
import './App.css';
import CSC642 from './CSC642';
import {Switch, Route} from 'react-router-dom';
import Form from './Form';
import Result from './Result';

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
            lastname: ' ',
            firstname: ' ',
            street: '',
            suite: '',
            city: '',
            state: '',
            zipcode:'',
            education: '',
            income:'',
            phone:'',
            email:'',
            search: false

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
        this.updateSubmit = this.updateSubmit.bind(this);
    
    }
    updateLast(lastname){
        this.setState({lastname,search: false});
    }
    updateFirst(firstname){
        this.setState({firstname,search: false});
    }
    updateStreet(street){
        this.setState({street, search:false});
    }
    updateSuite(suite){
        this.setState({suite});
    }
    updateCity(city){
        this.setState({city,search:false});
    }
    updateState(state){
        this.setState({state,search:false});
    }
    updateZip(zipcode){
        this.setState({zipcode,search:false});       
    }
    updateEdu(education){
        this.setState({education});
    }    
    updateIncome(income){
        this.setState({income});
    }   
    updatePhone(phone){
        this.setState({phone,search:false});
    }  
    updateEmail(email){
        this.setState({email});
    }
    updateSubmit(){
        this.setState({search: true});
    }
    render() {
    return (
            <div>
            
                <CSC642 />
                
                <Switch>  
                <Route exact path ='/' render={() => <Form 
                lastname = {this.state.lastname}
                firstname = {this.state.firstname}
                street = {this.state.street}
                suite = {this.state.suite}
                city = {this.state.city}
                state = {this.state.state }
                zipcode = {this.state.zipcode }
                education = {this.state.education}
                income = {this.state.income}
                phone = {this.state.phone}
                email = {this.state.email}
                onChangeLast = {this.updateLast}
                onChangeFirst = {this.updateFirst}
                onChangeStreet = {this.updateStreet}
                onChangeSuite = {this.updateSuite}
                onChangeCity = {this.updateCity}
                onChangeState = {this.updateState}
                onChangeZip = {this.updateZip}
                onChangeEdu = {this.updateEdu}
                onChangeIncome = {this.updateIncome}
                onChangePhone = {this.updatePhone}
                onChangeEmail = {this.updateEmail}
                onChangeTermSubmit = {this.updateSubmit}
                /> } />
                
                <Route path = '/Result' render={() => <Result
                search = {this.state.search}
                lastname = {this.state.lastname}
                firstname = {this.state.firstname}
                street = {this.state.street}
                suite = {this.state.suite}
                city = {this.state.city}
                state = {this.state.state }
                zipcode = {this.state.zipcode }
                education = {this.state.education}
                income = {this.state.income}
                phone = {this.state.phone}
                email = {this.state.email}
                /> } />
        </Switch>
        </div>   
    );
  }
};

export default App;
