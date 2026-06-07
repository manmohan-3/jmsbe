import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./JobCard";

function Appfr() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jobs")
      .then((res) => setJobs(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Job Portal</h1>

      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}

export default Appfr;