function JobCard({ job,onDelete,onEdit}) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <button onClick={()=>{onEdit(job._id)}}>Edit</button>
      <button onClick={()=>{onDelete(job._id)}}>Delete</button>
    </div>
  );
}

export default JobCard;