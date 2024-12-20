import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../CustomHook/useAuth";

const JobApply = () => {
    const {id} = useParams();
    const { user } = useAuth();
    console.log(id);

    const submitJobApplication = e =>{
        e.preventDefault();
        const form = e.target;
        const linkedIn = form.linkedin.value
        const GitHub = form.GitHub.value
        const resume = form.resume.value

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedIn,
            GitHub,
            resume
        }


    }




  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-4 mb-12 ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Apply Now!</h1>
        </div>
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
      </div>
    </div>
  );
};

export default JobApply;
