import Lottie from "lottie-react";
import React, { useContext } from "react";
import SignInData from './../../assets/Lottie/bannerData.json'
import AuthContext from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/'

    const handleSignIn=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
        .then(res=>{
            console.log(res)
            navigate(from)
        })
        .catch(err=> console.log(err))
    }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={SignInData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
