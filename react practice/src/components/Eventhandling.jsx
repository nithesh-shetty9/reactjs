import "./EV.css"

export const  EventHandling=()=>{
    function handleClick()
    {
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        alert("hi im onlclick event");
    }
    function handleWelcome(user)
    {
        console.log("hi"+user);
    }
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        <button onClick={()=>handleClick(event)}>Click me</button>
        <button onClick={()=>handleWelcome("NITHESH")}>Click me</button>
        </>
    );
};
