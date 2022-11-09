import React from "react";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";
import icon4 from "../../../assets/icons/icon4.png";

const WhyChooseMe = () => {
  return (
    <div className="my-20 text-center">
      <h2 className="capitalize text-4xl md:text-5xl font-semibold text-slate-700 dark:text-slate-100 ">
        Why choose me?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-10">
        <div className="bg-sky-100 p-3 rounded-xl shadow-lg border border-slate-300 text-center">
          <img className="w-12 mx-auto" src={icon1} alt="" />
          <h5 className="capitalize text-lg md:text-xl font-semibold text-slate-700 mt-2 ">
            Expert in tax code
          </h5>
        </div>
        <div className="bg-sky-100 p-3 rounded-xl shadow-lg border border-slate-300 text-center">
          <img className="w-12 mx-auto" src={icon2} alt="" />
          <h5 className="capitalize text-lg md:text-xl font-semibold text-slate-700 mt-2 ">
            Negotiator
          </h5>
        </div>
        <div className="bg-sky-100 p-3 rounded-xl shadow-lg border border-slate-300 text-center">
          <img className="w-12 mx-auto" src={icon3} alt="" />
          <h5 className="capitalize text-lg md:text-xl font-semibold text-slate-700 mt-2 ">
            Specialist in filing tax returns
          </h5>
        </div>
        <div className="bg-sky-100 p-3 rounded-xl shadow-lg border border-slate-300 text-center">
          <img className="w-12 mx-auto" src={icon4} alt="" />
          <h5 className="capitalize text-lg md:text-xl font-semibold text-slate-700 mt-2 ">
            Income and property protection
          </h5>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
