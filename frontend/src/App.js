import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch, Redirect,withRouter} from 'react-router-dom';
import LeadDashboard from './Components/LeadDashboard';
import Login from './Components/Login';
import Leadform from './Components/Leadform';
// import SignInForm from './Components/SignInForm';
// import SignUpForm from './Components/SignUpForm';


// import Axios from 'axios'; /

class App extends Component{

constructor(props) {
super(props);
this.state = {
error: null,
isLoaded: false,
prospect: []
};
}

componentDidMount(){
fetch("http://127.0.0.1:8000/prospects/")
.then(res => res.json())
.then(
(result) => {
this.setState({
isLoaded: true,
prospect: result
});
},
// Note: it's important to handle errors here
// instead of a catch() block so that we don't swallow
// exceptions from actual bugs in components.
(error) => {
this.setState({
isLoaded: true,
error
});
}
)
}

render(){
return (
<Router>
<div>
<Switch>
<Route exact path='/' component={Login}/>
<Route exact path='/leaddash' component={withRouter(LeadDashboard)}/>
<Route exact path='/leadform' component={withRouter(Leadform)}/>
{/* <Route exact path='/sign-in' component={SignInForm}/>
<Route exact path='/sign-up' component={SignUpForm}/> */}
<Redirect path='/'/>
</Switch>
</div>
</Router>
);}

}
export default App;