function JobCard({ job }) {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.companyName}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
    </div>
  );
}

export default JobCard;