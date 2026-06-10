import {  useState } from "react";
import axios from "axios";
function CreateJob() {
    const [jobData, setjobData] = useState({
        title: "", companyName: "", location: "", salary: "", jobType: "", experience: "", description: "",
        skills: ""
    });
    const Submitting = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/jobs",
                jobData
            );

            console.log(response.data);
            alert("Job Posted Successfully");
        } catch (error) {
            console.log(error.response?.data);
            alert("Failed to Post Job");
        }

    }
    return (<>
        <div>
            <form onSubmit={Submitting}>
                <table>
                    <tr>
                        <td><label htmlFor="">Enter job Title:</label></td>
                        <td><input type="text" value={jobData.title} placeholder="Enter the Job" onChange={(e) => setjobData({ ...jobData, title: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter companyName:</label></td>
                        <td><input type="text" value={jobData.companyName} placeholder="Enter the Organization Name" onChange={(e) => setjobData({ ...jobData, companyName: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter location:</label></td>
                        <td><input type="text" value={jobData.location} placeholder="Enter Location" onChange={(e) => setjobData({ ...jobData, location: e.target.value })} /></td>

                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter Salary:</label></td>
                        <td><input type="text" value={jobData.salary} placeholder="Enter Salary" onChange={(e) => setjobData({ ...jobData, salary: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter Job Type:</label></td>
                        <td><input type="text" value={jobData.jobType} placeholder="Enter jobType" onChange={(e) => setjobData({ ...jobData, jobType: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter Experience:</label></td>
                        <td><input type="text" value={jobData.experience} placeholder="Enter Experience" onChange={(e) => setjobData({ ...jobData, experience: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter Description:</label></td>
                        <td><textarea value={jobData.description} placeholder="Enter Description" onChange={(e) => setjobData({ ...jobData, description: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Enter skills:</label></td>
                        <td><textarea value={jobData.skills} placeholder="Enter skills" onChange={(e) => setjobData({ ...jobData, skills: e.target.value })} /></td>
                    </tr>
                    <tr colSpan="2">
                        <td><button type="submit">Post data </button></td>
                    </tr>
                </table>
            </form>
        </div>
    </>)
}
export default CreateJob;