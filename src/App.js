import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {bindActionCreators} from "redux";
import RegForm from "./regform";
//import {loginFailed} from 'actions/loginActions';
import './firebase/firebase'; 


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main isLogged = {this.props.isLogged}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged : state.login.isLogged
  }

}

/*
const mapDispatchToProps = (dispatch) => {
  return {
    login : bindActionCreators(loginFailed, dispatch)

  }
}
*/

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
export default withRouter(connect(mapStateToProps)(App));
