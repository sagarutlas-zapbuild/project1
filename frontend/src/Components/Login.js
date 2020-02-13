import React from 'react'



function Login() {
    return (
        <div className="center">
            <label>Login
                </label>
            <br />
            <br />
            <label>
                <b>Username : </b>

                <input type="text" name="Username" placeholder="username">

                </input>
            </label>
            <br />
            <br />

            <label>
                <b>Password : </b>


                <input type="password" name="password" placeholder="password">
                </input>
            </label>
            <br />
            <br />
            <input type="button" name="Login" value="Login"></input>
        </div>

    );
}
export default Login;