import { useState } from "react";
import axios from "axios";

function Register() {

    const [formData, setformData] = useState({ name: "", email: "", password: "", role: "candidate" });
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/register", formData);
            console.log(response.data);
            console.log("Registration Successfull")
        } catch (error) {
            console.log(error.response.data);
            console.log("Registration Failed");
        }
    };
    return (
        <>
            <div>
                <form onSubmit={handlesubmit}>
                    <table border={1} style={{margin: "50px auto",padding: "20px",backgroundColor: "white"}}>
                        <caption><h2>Registration Form</h2></caption>
                        <tr>
                            <td>
                                <label htmlFor="1">Enter UserName:</label>
                            </td>
                            <td>
                                <input type="text" id="1" value={formData.name} onChange={(e) => setformData({ ...formData, name: e.target.value })} />
                            </td>

                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="2">Enter Email:</label>
                            </td>
                            <td>
                                <input type="email" id="2" value={formData.email} onChange={(e) => setformData({ ...formData, email: e.target.value })} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="3">Enter password:</label>

                            </td>
                            <td>
                                <input type="password" id="3" value={formData.password} onChange={(e) => setformData({ ...formData, password: e.target.value })} />
                            </td>
                        </tr>

                        <tr>
                            <td><button type="reset">Clear</button></td>
                            <td><button type="submit">Register</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}


export default Register;