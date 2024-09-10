import { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function Login() { 
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return isAuthenticated ? (
        <div>
            <h2>
                You are already logged in!
            </h2>
        </div>
    ) : (
        <div>
            <h1> 
                Login Page
            </h1>
            <button onClick={()=>loginWithRedirect()}>Login With Auth0</button>
        </div>
    )
}