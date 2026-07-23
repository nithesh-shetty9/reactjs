function Profilecard(props){
    const {name, age, greeting} = props;
    return(
        <>
        <h2>Name:{name}</h2>
        <h2>Age:{age}</h2>
        <p>{greeting}</p>
        <div>{props.children[1]}</div>
        </>
    );

};
export default Profilecard;