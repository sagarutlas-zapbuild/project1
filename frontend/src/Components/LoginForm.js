import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
state = {
username: '',
password: ''
};

handle_change = e => {
const name = e.target.name;
const value = e.target.value;
this.setState({
[name]: value,
});
};

render() {
return (
<form onSubmit={e => this.props.handle_login(e, this.state)} className="form1">
<h4>Log In</h4>
<label htmlFor="username"><b>Username :</b>
</label>

<input
type="usename"
name="username"
value={this.state.username}
onChange={this.handle_change}
/>
<br/>
<br/>


<br/>
<br/>
<label htmlFor="password"><b>Password : </b></label>

<input
type="password"
name="password"
value={this.state.password}
onChange={this.handle_change}
/>
<br/>
<br/>
<input type="submit" />
</form>
);
}
}

export default LoginForm;

LoginForm.propTypes = {
handle_login: PropTypes.func.isRequired
};