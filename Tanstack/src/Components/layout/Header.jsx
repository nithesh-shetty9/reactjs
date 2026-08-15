import { NavLink } from "react-router";

export const Header=()=>{
  return(
    <header>
        <div>
            <NavLink to='/'>NithesH</NavLink>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/trad">Fetchold</NavLink></li>
                 <li><NavLink to="/trad">Fetchold</NavLink></li>
            </ul>
        </div>
    </header>
  );
}