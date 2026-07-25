export const Eventprops=()=>{
    const HandleWelcomeUser=(user)=>{
        alert("hello"+" "+user);
    }
     const handleHover=()=>{
        alert("hello"+" "+"im hovered");
    }
    return(
        <>
        <WelcomeUser onClick={(user)=>HandleWelcomeUser(user)}
            onMouseEnter={handleHover}/>     
          </>
    )
}
const WelcomeUser=(props)=>{
    function greeting(){
        alert("greetings");
    }
    console.log(props);
    return (
        <>
        <button onClick={()=>props.onClick("vindod")}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
        <button onClick={greeting}>Greeting</button>
        </>
    );
}