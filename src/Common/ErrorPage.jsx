import React from "react";
import errorImg from "./../assets/Lottie/errorPage.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="max-w-xl mx-auto mt-28">
      <Lottie animationData={errorImg}></Lottie>
    </div>
  );
};

export default ErrorPage;
