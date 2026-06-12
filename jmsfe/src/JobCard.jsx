function JobCard({ job,onDelete,onEdit,onApply}) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <button onClick={()=>{onEdit(job._id)}}>Edit</button>
      <button onClick={()=>{onDelete(job._id)}}>Delete</button>
      <button onClick={()=>{onApply(job._id)}}>Apply</button>
    </div>
  );
}

export default JobCard;