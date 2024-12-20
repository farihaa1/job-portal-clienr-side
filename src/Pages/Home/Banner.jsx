import React from "react";
import team1 from './../../assets/bannerImg/banner1.jpg'
import team2 from './../../assets/bannerImg/banner2.jpg'
import { motion } from "motion/react"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1  py-10 ">
       <motion.img
           src={team1}
           animate={{y: [20, 60, 20], x:[0, 10, 0]}}
           transition={{duration: 7, repeat: Infinity}}
           className="max-w-xs w-64 object-cover rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-8 border-b-8 border-blue-500"
        />
       <motion.img
          src={team2}
          animate={{x: [120, 170, 120], y: [-10, -20, -10]}}
          transition={{duration: 12, repeat: Infinity}}
          className="max-w-xs w-64 object-cover rounded-b-[40px] rounded-tl-[40px] shadow-2xl border-r-8 border-t-8 border-blue-500"
        />
       </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Job for You!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
