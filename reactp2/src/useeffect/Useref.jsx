import { useRef } from "react";

export const Useref = () => {
    const username=useRef(null);
    const password=useRef(null);
    const handleformsubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
  return (
    <div>
        <form onSubmit={handleformsubmit}>
            <input type="text"id="uername" ref={username}/>
            <br/>
            <br/>
            <input type="password"id="password" ref={password}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
}