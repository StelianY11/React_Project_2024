import { createContext, useState } from "react";


export const AuthContext = createContext({
    userId: "",
    email: "",
    accessToken: "",
    isAuthenticated: false,
    changeState: (authState = {}) => null,
    logout: () => null,
}); 

export function AuthContextProvider(props) {
    const [authState, setAuthState] = useState({});
    
    const changeState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        
        setAuthState(state);
    };

    const logout = () => {
        changeState({});
        localStorage.removeItem('accessToken'); 
    };
    
    const contextData = {
        userId: authState.userId,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeState,
        logout,
    }
    return (
        <AuthContext.Provider value={contextData}>
            {props.children}
        </AuthContext.Provider>
    )
  }