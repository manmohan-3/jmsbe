import { useState, useEffect } from "react";
import axios from "axios";
function MyApplications() {
    const [MyApplications, setMyApplications] = useState([])
    const email = prompt("Enter Candidate Email")
    useEffect(() => {
        axios.get(`http://localhost:5000/api/applications/candidate/${email}`)
        .then((res) => setMyApplications(res.data.data)).catch((error) => console.log(error));
    }, [])
    return (
        <div>
            <h1>My Applications</h1>

            {MyApplications.map((app) => (
                <div key={app._id}>
                    <h3>{app.job?.title}</h3>
                    <p>{app.job?.companyName}</p>
                    <p>Status: {app.status}</p>
                    <hr />
                </div>
            ))}
        </div>
    );

}
export default MyApplications;