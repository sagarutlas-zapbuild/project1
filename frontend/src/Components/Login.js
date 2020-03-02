import React from 'react'
import {Link} from 'react-router-dom'
 
function Login() {
    return (
        <div id="margin">
            <label>Login
                </label>
            <br />
            <br />
            <label>
                <b>Username : </b>
                <input type="text" name="Username" required placeholder="username">
                </input>
            </label>
            <br />
            <br />
            <label>
                <b>Password : </b>
                <input type="password" name="password"  required placeholder="password">
                </input>
            </label>
            <br />
            <br />
           <button  type="submit" onClick={() => window.location.reload(true)}><Link to="leaddash"></Link>submit</button>
        </div>

    );
}
export default Login;