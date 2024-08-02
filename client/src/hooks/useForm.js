import { useState } from "react";

export function useForm(intialValue, onSubmit) {
    const [values, setValues] = useState(intialValue);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        onSubmit(values);
    };

    return{
        values,
        changeHandler,
        submitHandler,
    }
}