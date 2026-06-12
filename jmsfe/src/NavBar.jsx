import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar(){
    const navigate=useNavigate();
    const handlelogout=()=>{
        localStorage.removeItem("token");
        alert("Logout Successfull");
        navigate("/login");
    };
    return(
        <>
        <div>
        <h1>Job Portal</h1>
        <Link to="/">Home</Link>|{" "}
        <Link to="/login">Login</Link>|{" "}
        <Link to="/register">Register</Link>|{" "}
        <Link to="/createjob">Create-Job</Link>|{" "}
        <Link to="/candidate/register">Candidate Register</Link>|{" "}
        <Link to="/candidate/login">Candidate Login</Link>
        <button onClick={handlelogout}>Logout</button>
        <hr/>
        </div>
        </>
    )
}
export default NavBar