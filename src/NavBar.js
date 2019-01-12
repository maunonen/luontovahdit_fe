import React from 'react';
import {List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {logout} from "./actions/loginActions";

export default class NavBar extends React.Component {

    logout = () => {
        this.props.dispatch(logout());
    }

    render() {
        return(
            <List>
                <List.Item><Link to="/login">Login</Link></List.Item>
                <List.Item><Link to="/register">Register</Link></List.Item>
                <List.Item><Link to="/profile">Profile</Link></List.Item>
                <List.Item><Link to="/logout" onClick={this.logout} >Logout</Link></List.Item>
            </List>
        )
    }
}

connect()(NavBar);