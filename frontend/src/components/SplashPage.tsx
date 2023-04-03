import React from 'react'
import LoginButton from './Login'
import LogoutButton from './Logout'
import { useAuth0 } from '@auth0/auth0-react'
import '../css/SplashPage.css';
import logo from '../images/shelfy-logo.png';

const SplashPage = () => {
    const { isAuthenticated, user } = useAuth0();
    return (
        <>  
            <div className="splash-wrapper">
                <div className="content-wrapper">
            <img src={logo} alt="shelfy logo"/>
            <h2>Track the shelf life of your bathroom products.
</h2>
            {user && <h3>{user.name}</h3>}
            {!isAuthenticated && <LoginButton />}
            </div>
            </div>
        </>
    )
}

export default SplashPage