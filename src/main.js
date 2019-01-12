import React from 'react'; 
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; 
import Welcome from './Welcome'; 
import LoginForm from './loginform'; 
import SearchBar from './SearchBar'; 
import RegForm from './regform'; 
import HotSpot from './HotSpot';
import notFound from './notFound';
import NavBar from "./NavBar";
import LogOut from "./logout";
import HomePage from "./homepage";
import Profile from "./profile";


export default class Main extends React.Component {

render (){

    return (

    <Router>
        <div>
            <NavBar/>
          <Switch>
            <Route exact path="/" render={() =>
                (<HomePage/>)
            }/>
             <Route exact path="/register" render={() =>
                (<RegForm register = {this.props.register}/>)
            }/>


              <Route exact path="/logout" render={() =>
                  (<LogOut/>)
              }/>

              <Route exact path="/login" render={() =>
                  this.props.isLogged ?
                      (<Welcome/>) :
                  (<LoginForm login = {this.props.login}/>)
              }/>
              <Route exact path="/profile" render={() =>
                  this.props.isLogged ?
                      (<Profile/>) :
                      (<Redirect to="/login"/>)
              }/>
              <Route exact path="/luontovahdit" render={() =>
                this.props.isLogged ? 
                (<Welcome/>) : 
                (<Redirect to="/"/>)
            }/>  
             <Route exact path="/luontovahdit/searchbar" render={() => 
                this.props.isLogged ? 
                (<SearchBar/>) : 
                (<Redirect to="/"/>)
            }/>  
             <Route exact path="/luontovahdit/hotspots" render={() => 
                this.props.isLogged ? 
                (<HotSpot/>) : 
                (<Redirect to="/"/>)
            }/>

            <Route component = {notFound}/>

            </Switch>
        </div>
    </Router>
       
        
    )
}
}
