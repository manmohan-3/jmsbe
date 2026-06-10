import { Link } from "react-router-dom";
function NavBar(){
    return(
        <>
        <div>
        <h1>Job Portal</h1>
        <Link to="/">Home</Link>|{" "}
        <Link to="/login">Login</Link>|{" "}
        <Link to="/register">Register</Link>{" "}
        <Link to="/createjob">Create-Job</Link>
        <hr/>
        </div>
        </>
    )
}
export default NavBar