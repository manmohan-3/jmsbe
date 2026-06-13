import { useState } from "react";
import axios from "axios";
function CandidateRegister() {
    const [formData, setformData] = useState({ name: "", email: "", password: "", phone: "", skills: "" })
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:5000/api/candidate/register",
                { ...formData, skills: formData.skills.split(",") });
            console.log(response.data);
            alert("Registration Successfull");
        }
        catch (error) {
            console.log(error.response?.data);
            alert("Registration Failed");
        }
    };
    return (<>
        <div >
            <form onSubmit={handlesubmit}>
                
                <table border={1} style={{margin: "50px auto",padding: "20px",backgroundColor: "white"}}>
                    <caption><h2>Candidate Registration</h2></caption>
                    <tr>
                        <td><label htmlFor="c1">Enter name:</label></td>
                        <td><input type="text" id="c1" value={formData.name} placeholder="Enter candidate name" onChange={(e) => setformData({ ...formData, name: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="c2">Enter Email:</label></td>
                        <td><input type="email" id="c2" value={formData.email} placeholder="Enter Email" onChange={(e) => setformData({ ...formData, email: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="c3">Enter Password:</label></td>
                        <td><input type="password" id="c3" value={formData.password} placeholder="Enter password" onChange={(e) => setformData({ ...formData, password: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="c4">Enter phone:</label></td>
                        <td><input type="text" id="c4" value={formData.phone} placeholder="Enter phone" onChange={(e) => setformData({ ...formData, phone: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="c5">Enter skills:</label></td>
                        <td><input type="text" id="c5" value={formData.skills} placeholder="Enter skills" onChange={(e) => setformData({ ...formData, skills: e.target.value })} /></td>
                    </tr>
                    <tr >
                        <td colSpan={2}><button type="submit">Register</button></td>
                    </tr>
                </table>
            </form>
        </div>
    </>)
}
export default CandidateRegister;