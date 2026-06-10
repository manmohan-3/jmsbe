import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

function Appfr() {
  const [jobs, setJobs] = useState([]);
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

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {/* <h1>Job Portal</h1> */}

      {jobs.map((job) => (
        <JobCard key={job._id} job={job} onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
}

export default Appfr;