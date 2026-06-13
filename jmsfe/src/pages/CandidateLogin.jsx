import axios from "axios";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
function CandidateLogin() {
    const navigate = useNavigate();
    const [formData, setformData] = useState({ email: "", password: "" });
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/candidate/login", formData);
            console.log(response.data);
            localStorage.setItem("candidateToken", response.data.data.token);
            localStorage.setItem("candidateData",JSON.stringify(response.data.data));
            alert("Login Successfull");
            navigate("/")
        }
        catch (error) {
            console.log(error.response?.data);
            alert("Login Failed");
        }

    };
    return (<>
        <div> 
            <form onSubmit={handlesubmit}>
                <table border={1} style={{margin: "50px auto",padding: "20px",backgroundColor: "white"}}>
                    <caption><h2>Candidate Login</h2></caption>
                    <tr>
                        <td><label htmlFor="cl1">Enter Email:</label></td>
                        <td><input type="email" id="cl1" value={formData.email} placeholder="Enter email" onChange={(e) => setformData({ ...formData, email: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="cl2">Enter Email:</label></td>
                        <td><input type="password" id="cl2" value={formData.password} placeholder="Enter password" onChange={(e) => setformData({ ...formData, password: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><button type="reset">clear</button></td>
                        <td><button type="submit">submit</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </>)
}
export default CandidateLogin;