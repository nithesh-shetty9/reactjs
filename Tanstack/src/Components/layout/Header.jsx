import { NavLink } from "react-router";

export const Header=()=>{
  return(
    <header>
        <div>
            <NavLink to='/'>Nithesh</NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/trad">Fetchold</NavLink></li>
                 <li><NavLink to="/rq">FetcRQ</NavLink></li>
            </ul>
        </div>
    </header>
  );
}