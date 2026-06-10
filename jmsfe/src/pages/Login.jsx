import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigate=useNavigate();
  const [formData, setformData] = useState({ email: "", password: "" })
  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log(response.data);
      localStorage.setItem("token", response.data.data.token);
      alert("Login Successfull");
      navigate("/");
      
    }
    catch(error){
      console.log(error.response?.data);
      alert("Login failed");
    }
    
  }
  return (<><h1>Login Page</h1>
    <form onSubmit={handlesubmit}>
      <table border={1}>
        <tr>
          <td><label htmlFor="l1">Enter Email:</label></td>
          <td><input type="email" placeholder="Enter Your Email" id="l1" value={formData.email} onChange={(e)=>{setformData({...formData, email: e.target.value,});}}/></td>
        </tr>
        <tr>
          <td><label htmlFor="l2">Enter Password:</label></td>
          <td><input type="password" placeholder="Enter password" value={formData.password} onChange={(e)=>{setformData({...formData,password: e.target.value,});}} /></td>
        </tr>
        <tr>
          <td><button type="reset">Clear</button></td>
          <td><button type="submit">Login</button></td>
        </tr>
      </table>
    </form>
  </>);
}

export default Login;