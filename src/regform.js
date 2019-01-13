import React from 'react'; 
import {Form, Button, Label} from 'semantic-ui-react'
//import {registerAction} from './actions/loginActions';
import {connect} from 'react-redux';
import {register} from './actions/loginActions'
import { getProfile } from './actions/profileAction';

class RegForm extends React.Component {

    constructor (props){
        super(props); 
        this.state = {
            username: "", 
            displayname: "", 
            password: "", 
            confpasssword : "", 
            email : ""
        }
    }

    /** Create validation for all fields */
    
    onChange  = (event) => {

        let state = {}
        state[event.target.name] = event.target.value; 
        this.setState(state); 
        
    }
    submit = (event) => {

        event.preventDefault(); 
        if (this.state.username.length === 0 || this.state.password.length === 0 || this.state.email === 0 ){
            alert("Please fill out all required fields.")
            return 
        }
        if (this.state.password !== this.state.confpasssword) {
            alert("Password doesn't match confirm password")
            return 
        }
        let user = {
            "username" : this.state.username, 
            "displayname" : this.state.displayname,
            "password" : this.state.password, 
            "email" : this.state.email
        }

        /** Should be different user and newuser or REDIRECT */
  
        this.props.dispatch(register(user));
        //this.props.dispatch(getProfile); 
  
    }


    getProfile = () => {
        this.props.dispatch(getProfile); 
    }

    render(){
        return(
            <Form>
                <Form.Field>
                    <Label htmlFor="username">Username</Label>
                    <input type="text"
                           placeholder="username"
                            name="username"
                            onChange={this.onChange}
                            value={this.state.username}
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="disname">Display name</Label>
                    <input type="text"
                            name="displayname"
                           placeholder="Display name"
                            onChange={this.onChange}
                            value={this.state.displayname}
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="password">Password</Label>
                    <input type="text"
                            name="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            value={this.state.password}
                    />
                </Form.Field>
                 <Form.Field>
                    <Label htmlFor="confpassword">Confirm Passsword</Label>
                    <input type="text"
                            placeholder="Password"
                            name="confpasssword"
                            onChange={this.onChange}
                            value={this.state.confpasswword}
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="email">Email</Label>
                    <input type="text"
                            name="email"
                            placeholder="email"
                            onChange={this.onChange}
                            value={this.state.email}
                    />
                </Form.Field>
                <Button onClick={this.submit}
                        name="register">Register
                </Button>
                <Button onClick={this.getProfile}
                        name="getProfile">Get profile
                </Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {

    //console.log("MAP STATE TO PROPS" + JSON.stringify(state.profile.profile))

    return {
      /*   isLogged: state.login.isLogged,
        token : state.login.token,
        profile : state.profile.profile */
        getProfile : state.profile.getProfile
    }
}
export default connect(mapStateToProps)(RegForm);

