import { useContext } from "react";
import { login, register } from "../api/authApi"
import { AuthContext} from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeState} = useContext(AuthContext);

    const loginHandler = async (email, password) => {
            const result = await login(email, password);

            changeState(result);
            return result;
    }

    return loginHandler;
};

export const useRegister = () => {
    const {changeState} = useContext(AuthContext);

    const registerHandler = async (email, username, password, rePasword) => {
        const result = await register(email, username, password, rePasword);

        changeState(result);
        return result;
    };

    return registerHandler
};