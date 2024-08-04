import { useContext } from "react";
import { login, register, logout} from "../api/authApi"
import { AuthContext } from "../contexts/AuthContext";

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

    const registerHandler = async (email, username, password) => {
        const result = await register(email, username, password);

        changeState(result);
        return result;
    };

    return registerHandler
};

export const useLogout = () => {
    const { logout: sessionLogout } = useContext(AuthContext);

    const logoutHandler = async () => {
        await logout();
        sessionLogout();
    };

    return logoutHandler
};