import React from 'react';

function JobList({ jobs }) {
  return (
    <ul>
      {jobs.map((job) => (
        <li key={job.id}>{job.title} ({job.location})</li>
      ))}
    </ul>
  );
}

export default JobList;
