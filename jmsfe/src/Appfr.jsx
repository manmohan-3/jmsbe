import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import { useNavigate,Navigate } from "react-router-dom";
function Appfr() {
  const navigate=useNavigate();
  const [jobs, setJobs] = useState([]);
  const [search, setsearch] = useState("");
  const handleEdit = async (id) => {
    const newSalary = prompt("Enter new salary");

    if (!newSalary) return;

    try {
      await axios.put(
        `http://localhost:5000/api/jobs/${id}`,
        {
          salary: newSalary,
        }
      );

      alert("Job Updated");

      const response = await axios.get(
        "http://localhost:5000/api/jobs"
      );

      setJobs(response.data.data);
    } catch (error) {
      console.log(error.response?.data);
      alert("Update Failed");
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${id}`)
      setJobs(jobs.filter((job) => job._id !== id));
      alert("Job Deleted Successfully");

    }
    catch (error) {
      console.log(error.response?.data);
      alert("Failed to Delete Job");
    }
  };
  const handleApply = async (jobId) => {
    const candidate=JSON.parse(localStorage.getItem("candidateData"));
    if(!candidate){
      alert("Login First");
      navigate("/candidate/login");
      return
    }
    try {
      const response= await axios.post("http://localhost:5000/api/applications",{
        job: jobId,
        candidateName: candidate.name,
        candidateEmail: candidate.email,}
      )
      console.log(response.data)
      alert("Application Subbmitted Successfully")

    }
    catch (error) {
      console.log(error.response?.data)
      alert("Application Submition Failed")
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  const filteredjobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input type="text" placeholder="Search"
        value={search} onChange={(e) => setsearch(e.target.value)} /><br/><br/>
      {/* <h1>Job Portal</h1> */}

      {filteredjobs.map((job) => (
        <JobCard key={job._id} job={job} onDelete={handleDelete} onEdit={handleEdit} onApply={handleApply} />
      ))}
    </div>
  );
}

export default Appfr;