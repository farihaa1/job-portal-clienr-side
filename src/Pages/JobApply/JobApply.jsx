import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../CustomHook/useAuth";
import { SiWalkman } from "react-icons/si";
import Swal from "sweetalert2";

const JobApply = () => {

  const navigate = useNavigate();

  const { id } = useParams();
  const { user } = useAuth();
  console.log(id);

  const submitJobApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const GitHub = form.GitHub.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      GitHub,
      resume,
    };

    fetch("http://localhost:5000/job-applications", {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(jobApplication)
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Application Submitted",
                showConfirmButton: false, 
                timer: 1500
            });
            navigate('/myApplications')
        }
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-4 mb-12 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Apply Now!</h1>
        </div>
        <form action="" onSubmit={submitJobApplication}>
          <div className="card bg-base-100 shadow-2xl mt-12 ">
            <div className="card-body w-[400px]  gap-4">
              <div className="flex flex-col ">
                <label className="fieldset-label">LinkedIn URL</label>
                <input
                  type="url"
                  name="linkedin"
                  className="input input-bordered mt-2"
                  placeholder="Linkedin url"
                />
              </div>
              <div className="flex flex-col ">
                <label className="fieldset-label">GitHub URL</label>
                <input
                  type="url"
                  name="GitHub"
                  className="input input-bordered mt-2"
                  placeholder="GitHub url"
                />
              </div>
              <div className="flex flex-col ">
                <label className="fieldset-label">Resume URL</label>
                <input
                  type="url"
                  name="resume"
                  className="input input-bordered mt-2"
                  placeholder="Resume url"
                />
              </div>

              <button className="btn btn-neutral mt-4">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
