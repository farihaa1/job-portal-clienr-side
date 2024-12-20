import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    company,
    company_logo,
    requirements,
    description
  } = job;

  return (
    <div className="card bg-base-100 shadow-md p-2">
      <div className="flex gap-4 m-2">
        <figure>
          <img className="w-16" src={company_logo} alt={company} />
        </figure>
        <div>
          <h4 className="text-2xl font-semibold">{company}</h4>
          <p className="flex mt-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">{category}</div>
        <p>
          {description}
        </p>
        <div className="flex gap-3 flex-wrap ">
            {
                requirements.map((skill, idx)=> <p key={idx} className="px-3 py-2 bg-blue-50 rounded-lg max-w-max text-center">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end">
            <p>
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </p>
          <Link to={`/jobs/${_id}`} className="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
