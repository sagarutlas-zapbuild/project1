import React from 'react'

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
            <input type="button" name="Login" value="Login"></input>
        </div>

    );
}
export default Login;