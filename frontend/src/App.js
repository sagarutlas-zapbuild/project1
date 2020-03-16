// import React, { Component } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import{BrowserRouter as Router,Route,Switch, Redirect,withRouter} from 'react-router-dom';
// import LeadDashboard from './Components/LeadDashboard';
// import Login from './Components/Login';
// import Leadform from './Components/Leadform';
// // import SignInForm from './Components/SignInForm';
// // import SignUpForm from './Components/SignUpForm';


// // import Axios from 'axios'; /

// class App extends Component{

// constructor(props) {
// super(props);
// this.state = {
// error: null,
// isLoaded: false,
// prospect: []
// };
// }

// componentDidMount(){
// fetch("http://127.0.0.1:8000/userName/")
// .then(res => res.json())
// .then(
// (result) => {
// this.setState({
// isLoaded: true,
// prospect: result
// });
// },
// // Note: it's important to handle errors here
// // instead of a catch() block so that we don't swallow
// // exceptions from actual bugs in components.
// (error) => {
// this.setState({
// isLoaded: true,
// error
// });
// }
// )
// }

// render(){
// return (
// <Router>
// <div>
// <Switch>
// <Route exact path='/' component={Login}/>
// <Route exact path='/leaddash' component={withRouter(LeadDashboard)}/>
// <Route exact path='/leadform' component={withRouter(Leadform)}/>
// {/* <Route exact path='/sign-in' component={SignInForm}/>
// <Route exact path='/sign-up' component={SignUpForm}/> */}
// <Redirect path='/'/>
// </Switch>
// </div>
// </Router>
// );}

// }
// export default App;


import React, { Component } from 'react';
import Nav from './Components/Nav';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/users/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <Nav
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>
      </div>
    );
  }
}

export default App;