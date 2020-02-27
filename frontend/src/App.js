import React, { Component } from 'react';
import './App.css';
//import LeadDashboard from './Components/LeadDashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
//import LeadDashboard from './Components/LeadDashboard'

import Leadform from './Components/Leadform';
import Dashboard from './Components/LeadDashboard'

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      prospect: []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/prospects/")
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
    return (<>
    <Leadform/>
    {this.state.prospect.map((prospect, index) => {
      return(
        <li>
          {prospect.prospect_id}
          {prospect.prospect_full_name}
          {prospect.prospect_company}
        </li>
      )
    })}

    </>);}
     
}
export default App;
