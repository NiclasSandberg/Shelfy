import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import React from "react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <Button color="primary" variant="contained"
        onClick={() => 
        logout({ logoutParams: { returnTo: window.location.origin } })}> 
            Log out
        </Button>
        
    );
};

export default LogoutButton;