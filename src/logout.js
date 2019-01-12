import React from 'react';
import {connect} from "react-redux";
import {logout} from "./actions/loginActions";



export default class LogOut extends React.Component {

    render() {
        return(
           <h1>See you again</h1>
        )
    }

}

connect()(LogOut)