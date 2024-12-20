import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {_id, title, company, description, applicationDeadline} = useLoaderData();
  
//   const {
//     applicationDeadline,
//     category,
//     company,
//     company_logo,
//     description,
//     hr_name,
//     jobType,
//     location,
//     requirements,
//     responsibilities,
//     salaryRange,
//     status,
//     title,
//     _id,
//   } = job;

  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold py-4">Job Details for {title}</h2>
      <p>apply: {company}</p>
      <p>deadline: {applicationDeadline} </p>
      <p>{description}</p>
      <Link to={`/job-apply/${_id}`} className="btn btn-primary mt-4"> Apply now</Link>
    </div>
  );
};

export default JobDetails;
