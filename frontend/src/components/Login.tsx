import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    console.log(isAuthenticated);


    return (

    <> 

<Button variant="contained" style={{backgroundColor:"#808080"}}
        onClick={() => loginWithRedirect()}> 
            Login
        </Button>
    </>
    );
    
};

export default LoginButton;