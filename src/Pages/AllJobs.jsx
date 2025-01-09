import React, { useState } from "react";
import useJobs from "../CustomHook/useJobs";
import HotJobCard from "./Home/HotJobCard";
import { FaSearch } from "react-icons/fa";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary);

  

  if (loading) {
    return <h2>Job is loading</h2>;
  }
  return (
    <div>
      <h1 className="py-5 text-4xl font-bold text-center">All Jobs</h1>
      <div className="w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5">
        <button
          onClick={() => setSort(!sort)}
          className={`btn btn-neutral font-semibold text-base ${
            sort ? "btn-success text-white" : ""
          }`}
        >
          {sort ? "Sorted By Salary" : "Sort By Salary"}
        </button>
        <FaSearch className="text-gray-600 text-5xl"></FaSearch>
        <input
          onKeyUp={(e) => setSearch(e.target.value)}
          type="text"
          className="input input-bordered w-full"
          placeholder="search jobs by location"
        />
        <input
          onKeyUp={(e) => setMinSalary(e.target.value)}
          type="text"
          className="input input-bordered max-w-xs"
          placeholder="Min salary"
        />
        <input
          onKeyUp={(e) => setMaxSalary(e.target.value)}
          type="text"
          className="input input-bordered max-w-xs"
          placeholder="Max salary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-12">
        {jobs.map((job) => (
          <HotJobCard key={job._id} job={job}></HotJobCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
