import NavBar from "./NavBar";
function JobCard({ job, onDelete, onEdit, onApply }) {
  const token=localStorage.getItem("token");
  const candidateData=localStorage.getItem("candidateData")
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      {(candidateData &&
      <>
        <button onClick={() => { onApply(job._id) }}>Apply</button>
      </>
      )}
      {(token && 
      <>
        <button onClick={() => { onEdit(job._id) }}>Edit</button>
        <button onClick={() => { onDelete(job._id) }}>Delete</button>
      </>
      )}
    </div>
  );
}

export default JobCard;

