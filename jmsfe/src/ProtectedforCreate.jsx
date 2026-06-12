import { Navigate, useNavigate } from "react-router-dom";
function ProtectedforCreate({children}){
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    if(!token){
        return <Navigate to="/login" />
    }
    return children;
}
export default ProtectedforCreate;