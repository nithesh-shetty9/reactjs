import { useCounter } from "./useCounter";

function Counter() {
  const { count, increment } = useCounter();

  return (
    <button onClick={()=>{
        increment();
    }}>
      {count}
    </button>
  );
}

export default Counter;