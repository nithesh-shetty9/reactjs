import { useEffect, useState } from "react";

export const Users=()=> {
    const [users, setUsers] = useState([]);
    console.log("hi");
    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data));
}, []);
}