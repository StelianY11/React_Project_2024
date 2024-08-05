import requester from "./requester"

const BASE_URL = "http://localhost:3030/data/comments";

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });

const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId=${gameId}`,
        load: `user=_ownerId:users`,
    })

    console.log(`${BASE_URL}?${params.toString()}`);

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

export default {
    create,
    getAll,
}