import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./nav.css";

// logOut = () =>{
//     window.localStorage.setItem("loggedIn", false);
//     window.localStorage.clear();
//     window.location.href = "./sign-in";
//   }

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Daily Logger
      </Link>
      <InOut/>
      
    </nav>
  )
}

function InOut (){  
      const isLoggedIn = window.localStorage.getItem("loggedIn");
    if (!isLoggedIn) { 
        return (
        <ul>
          <CustomLink to="/sign-up">Join</CustomLink>
          <CustomLink to="/sign-in">Login</CustomLink>
        </ul> )}
        else { 
            return(
         <ul>
         <CustomLink onClick={() =>{
                window.localStorage.setItem("loggedIn", false);
                window.localStorage.clear();
                window.location.href = "./sign-in";
                }}   to="sign-in">Logout</CustomLink>
       </ul>
        )}
}

function CustomLink({ to, children, ...props }) {

  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}