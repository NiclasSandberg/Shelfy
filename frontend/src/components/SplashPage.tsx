import React from 'react'
import LoginButton from './Login'
import LogoutButton from './Logout'
import { useAuth0 } from '@auth0/auth0-react'


const SplashPage = () => {
    const { isAuthenticated, user } = useAuth0();
    return (
        <>
            <h2>WELCOME!</h2>
            {user && <h3>{user.name}</h3>}
            {!isAuthenticated && <LoginButton />}
        </>
    )
}

export default SplashPage