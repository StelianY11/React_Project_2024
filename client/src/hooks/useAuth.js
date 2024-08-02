import { login } from "../api/authApi"

export const useLogin = () => {
    const loginHandler = async (email, password) => {
            const result = await login(email, password);
    }

    return loginHandler;
};