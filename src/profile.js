import React from 'react';
import {Form, Button, Label} from 'semantic-ui-react'
//import {registerAction} from './actions/loginActions';
import {connect} from 'react-redux';
import {changeProfile, deleteProfile, getProfile, updateProfile} from './actions/profileAction'

class Profile extends React.Component {


    componentDidMount() {

        if (this.props.isLogged ){
            this.props.dispatch(getProfile(this.props.token));
            console.log("COMPONENT DID MOUNT");
        }
    }


    constructor (props){
        super(props);
        if (this.props.isLogged ){
            this.props.dispatch(getProfile(this.props.token));
        }
        console.log("CONSTRUCTOR");
        this.state = {
            username: "",
            displayname: "",
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
        if (this.state.username.length === 0 || this.state.email === 0 ){
            alert("Please fill out all required fields.")
            return
        }
        let user = {
            "username" : this.state.username,
            "displayname" : this.state.displayname,
            "email" : this.state.email
        }

        /** Should be different user and newuser or REDIRECT */

        if (event.target.name === "update"){

            let user = {
                username : this.state.username,
                displayname : this.state.displayname,
                email : this.state.email
            }


            this.props.dispatch(updateProfile(user, this.props.token));
        }
        if (event.target.name === "delete"){
            this.props.dispatch(deleteProfile(user.username, this.props.token));
        }
        if (event.target.name === "updatePassword"){

            alert ("Redirect to homepage");
        }
    }


    render(){

        console.log("RENDER");
        console.log(JSON.stringify(this.props.profile));

        //let displayname = this.props.profile.displayname;
        //let email = this.props.profile.email;
        //let username = this.props.profile.name;

        return(
            
            <Form>
                <Form.Field>
                    <Label htmlFor="username">Username</Label>
                    <input type="text"
                           placeholder="username"
                           name="username"
                           onChange={this.onChange}
                           value={ this.state.username }
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="displayname">Display name</Label>
                    <input type="text"
                           name="displayname"
                           placeholder="Display name"
                           onChange={this.onChange}
                           value={this.state.displayname }
                    />
                </Form.Field>
                <Form.Field>
                    <Label htmlFor="email">Email</Label>
                    <input type="text"
                           name="email"
                           placeholder="email"
                           onChange={this.onChange}
                           value={this.state.email }
                    />
                </Form.Field>
                <Button onClick={this.submit}
                        name="update">Update
                </Button>
                <Button onClick={this.submit}
                        name="delete">Delete
                </Button>
                <Button onClick={this.submit}
                        name="cancel">Cancel
                </Button>
                <Button onClick={this.submit}
                        name="changePassword">Change Password
                </Button>

            </Form>
        )
    }
}

const mapStateToProps = (state) => {

    console.log("MAP STATE TO PROPS" + JSON.stringify(state.profile.profile))

    return {
        isLogged: state.login.isLogged,
        token : state.login.token,
        profile : state.profile.profile
    }
}
export default connect(mapStateToProps)(Profile);