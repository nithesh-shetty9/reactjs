import { useId } from "react"

export const Useid=() => {
    const usernameid=useId()
    return (
    <div>
        <label htmlFor={usernameid}>USername:</label>
        <input type="text"id={usernameid}name="name"/>
           <label htmlFor={usernameid+"emailid"}>Email:</label>
        <input type="text"id={usernameid+"emailid"}name="name"/>
    </div>
  )
}