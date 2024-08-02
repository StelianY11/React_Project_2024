import { useContext } from "react";
import { login } from "../api/authApi"
import { AuthContext } from "../contexts/authContext";

export const useLogin = () => {
    const {changeState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
            const result = await login(email, password);
            changeState(result);
    }

    return loginHandler;
};