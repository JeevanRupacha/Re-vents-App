import React from 'react'

 const SigninMenu = (props)=> {
    return (
        <div>
            <button id="login-btn-id" onClick={props.handleSignin}>Login</button>
            <button id="register-btn-id">Register</button>
        </div>
    )
}

export default SigninMenu
