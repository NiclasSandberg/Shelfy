import React, { useContext } from "react"
import { IAuthContext } from "../interfaces";

export const AuthContext = React.createContext<IAuthContext>({
    token: null,
    userMetadata: null
});

export const useAuth = (): IAuthContext => useContext<IAuthContext>(AuthContext);