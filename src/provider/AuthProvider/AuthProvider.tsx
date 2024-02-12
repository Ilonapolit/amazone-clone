import {jwtDecode} from "jwt-decode";
import React, { useState, PropsWithChildren } from "react";
import { AuthContext, TAuthorizationStage_Enum } from "./AuthContext";
import { TAuthRequest, TUserRequest } from "../../@types/requestTypes";
import { setPrivateAccessToken } from "../../utils/privateAxios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../config/localStorageKeys";


export function AuthProvider({ children }: PropsWithChildren) {
    const [userData, setUserData] = useState<TUserRequest>();
    const [authStage, setAuthStage] = useState<TAuthorizationStage_Enum>(
      TAuthorizationStage_Enum.UNAUTHORIZED
    );
  
    function setAuthData(tokens: TAuthRequest) {
      const userData: TUserRequest = jwtDecode(tokens.access_token);
      setUserData(userData);
      localStorage.setItem(ACCESS_TOKEN, tokens.access_token);
      localStorage.setItem(REFRESH_TOKEN, tokens.refresh_token);
      setPrivateAccessToken(tokens.access_token);
      setAuthStage(TAuthorizationStage_Enum.AUTHORIZED);
    }
  
    return (
      <AuthContext.Provider
        value={{
          authStage,
          setAuthStage,
          setAuthData,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  