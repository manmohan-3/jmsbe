import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
function NavBar(){
    const navigate=useNavigate();
    const recruiterToken=localStorage.getItem("token")
    const candidateToken=localStorage.getItem("candidateToken")
    const handlelogout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("candidateToken");
        localStorage.removeItem("candidateData");
        alert("Logout Successfull");
        navigate("/");
    };
    return(
        <div className="navbar">
        <h2 className="logo">Job Portal</h2>
        <Link to={"/"}>Home</Link>{" "}|{" "}
        {!recruiterToken && !candidateToken &&(
           <>
                 <Link to={"/login"}>RecruiterLogin</Link>{" "}|{" "}
                 <Link to={"/register"}>Recruiter Register</Link>{" "}|{" "}
                 <Link to={"/candidate/login"}>CandidateLogin</Link>{" "}|{" "}
                 <Link to={"/candidate/register"}>CandidateRegister</Link>
           </>

        )}
        {recruiterToken && (
            <>
                <Link to={"/createjob"}>Create Job</Link>{" "}|{" "}
                <Link to={"/applications"}>Applications</Link>{" "}|{" "}
                <button onClick={handlelogout} className="logout-btn">Logout</button>
            </>
        )}
        {candidateToken &&(
            <>
                <Link to={"/myapplications"}>My Applications</Link>
                <button onClick={handlelogout} className="logout-btn">Logout</button>
            </>
        )

        }
        </div>
    )
}
export default NavBar