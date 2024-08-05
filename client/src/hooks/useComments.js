import { useEffect, useState } from "react";
import commentsApi from "../api/commentsApi";

export function useCreateComment() {
    const commentCreateHandler = (gameId, comment) => commentsApi.create(gameId, comment)

    return commentCreateHandler;
}

export function useGetAllComments(gameId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsApi.getAll(gameId);
            
            console.log(result);
            
            setComments(result);
        })
    }, [gameId])

    return [comments, setComments];
}