import { jsx } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { AuthContext, useAuth } from '../context/auth-context';
import { useAuth0 } from '@auth0/auth0-react';
import { shelfyConfig } from "../config/config";
import SplashPage from './SplashPage';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

interface AuthWrapperAttrs {
    children: JSX.Element;
}

const AuthWrapper = ({ children }: AuthWrapperAttrs) => {
    const { getAccessTokenSilently, user, getAccessTokenWithPopup, isLoading } = useAuth0();
    const [userMetadata, setUserMetadata] = useState<any>();
    console.log(userMetadata);
    const [token, setToken] = useState<string | null>(null)


    useEffect(() => {
        const getUserMetadata = async () => {

            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: shelfyConfig.audience,
                        scope: shelfyConfig.scope,
                    },
                });
                // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

                // const metadataResponse = await fetch(userDetailsByIdUrl, {
                //     headers: {
                //         Authorization: `Bearer ${accessToken}`,
                //     },
                // });

                // const { user_metadata } = await metadataResponse.json();

                setToken(accessToken ?? null);
                // setUserMetadata(user_metadata);
            } catch (e: any) {
                console.log(e);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);

    return (
        <>
            <AuthContext.Provider value={{ token: token, userMetadata: userMetadata }}>
                {
                    isLoading
                        ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh'}}>
                            <CircularProgress style={{color: '#808080'}}/>
                          </Box>
                        : (
                            token
                                ? children
                                : <SplashPage />
                        )
                }
            </AuthContext.Provider >
        </>

    )
}

export default AuthWrapper