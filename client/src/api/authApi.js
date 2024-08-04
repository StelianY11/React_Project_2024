import requester from "./requester"

const BASE_URL = "http://localhost:3030/users/";

export const login = async (email, password) => {
    const authData = await requester.post(`${BASE_URL}/login`, { email, password });

    return authData;
};

export const register = async (email, username, password, rePasword) => {
    const authData = await requester.post(`${BASE_URL}/register`, { email, username, password, rePasword });

    return authData;
};

export const logout = () => requester.get(`${BASE_URL}/logout`);