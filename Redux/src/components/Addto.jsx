import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo as addTodoAction } from "../Features/todoSlice";

export const Addtodo = () => {
    const [input, setinput] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        dispatch(addTodoAction(input));
        setinput('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setinput(e.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};