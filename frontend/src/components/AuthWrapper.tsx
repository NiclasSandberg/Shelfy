import { jsx } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { AuthContext, useAuth } from '../context/auth-context';
import { useAuth0 } from '@auth0/auth0-react';

interface AuthWrapperAttrs {
    children: JSX.Element;
}

const AuthWrapper = ({ children }: AuthWrapperAttrs) => {
    const { getAccessTokenSilently, user, getAccessTokenWithPopup } = useAuth0();
    const [userMetadata, setUserMetadata] = useState<any>();
    console.log(userMetadata);
    const [token, setToken] = useState<string | null>(null)


    useEffect(() => {
        const getUserMetadata = async () => {
            const domain = "dev-bsoabtbd2ae2u6vw.us.auth0.com";

            try {
                const accessToken = await getAccessTokenWithPopup({
                    authorizationParams: {
                        audience: `https://${domain}/api/v2/`,
                        scope: "read:current_user",
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
                {token && children}
            </AuthContext.Provider >
        </>

    )
}

export default AuthWrapper