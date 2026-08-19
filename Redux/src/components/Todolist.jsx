import { useSelector,useDispatch} from "react-redux";
import {removetodo} from "../Features/todoSlice"
export const Todolist=()=>{
    const alltodos=useSelector((state)=>state.todos);
    const dispatch=useDispatch();
    const handleRemove=(id)=>{
        dispatch(removetodo(id))
    }   
    return(
        <ul>
            {alltodos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>handleRemove(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}