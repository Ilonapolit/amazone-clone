import { createContext } from "react";
import { TAuthRequest } from "../../@types/requestTypes";

export enum TAuthorizationStage_Enum {
    UNAUTHORIZED = "unathorized",
    AUTHORIZED = "authorized",
  }
  
  type AuthContextValue = {
    authStage: TAuthorizationStage_Enum;
    setAuthData: (e: TAuthRequest) => void;
    setAuthStage: React.Dispatch<React.SetStateAction<TAuthorizationStage_Enum>>;
  };
  
  export const AuthContext = createContext<AuthContextValue>({
    authStage: TAuthorizationStage_Enum.UNAUTHORIZED,
    setAuthData: () => {},
    setAuthStage: () => {},
  });
  