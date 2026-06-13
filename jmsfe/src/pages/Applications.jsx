import { useState, useEffect } from "react";
import axios from "axios";
function Applications() {
    const [Applications, setApplications] = useState([]);
    const updatestatus = async (id, status) => {
        try {

            await axios.put(
                `http://localhost:5000/api/applications/${id}/status`,
                {
                    status,
                }
            );

            alert("Status Updated");

            const response = await axios.get(
                "http://localhost:5000/api/applications"
            );

            setApplications(response.data.data);

        } catch (error) {
            console.log(error.response?.data);
            alert("Update Failed");
        }
    };
    useEffect(() => {
        axios.get("http://localhost:5000/api/applications").then((res) => setApplications(res.data.data)).catch((error) => console.log(error))
    }, [])
    return (<>
        <h2>Applications</h2>

        {Applications.map((app) => (
            <div key={app._id}>
                <h3>{app.candidateName}</h3>
                <p>{app.candidateEmail}</p>
                <p>{app.job?.title}</p>
                <p>Status:</p>{app.status}
                <button onClick={() => updatestatus(app._id, "Shortlisted")}>Shortlist</button>
                <button onClick={() => updatestatus(app._id, "Rejected")}>Reject</button>
                <button onClick={() => updatestatus(app._id, "Selected")}>Select</button>
                <hr />
            </div>
        ))}
    </>)
}
export default Applications;