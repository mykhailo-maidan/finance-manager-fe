import { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export default function SignIn() {
    const {loginWithRedirect } = useAuth0();
    return (
        <button onClick={() => loginWithRedirect()}>SignIn</button>
    );
}