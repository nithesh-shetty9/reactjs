import { useReducer } from "react";

export const UsReducer = () => {
    const reducer=(state,action)=>{
        switch(action.type)
        {
            case "increment":return state+1;
            case "decrement":return state-1;
            case "reset":return 0;
        }
    }
    const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Count: {state}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
