import { Footer } from "flowbite-react";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/tax.svg";

const CommonFooter = () => {
  return (
    <div>
      <div className="bg-slate-700  pt-20 mb-0 p-5  rounded-none">
        <div className="w-full text-center">
          <div className="w-full justify-between  sm:flex sm:items-center sm:justify-between">
            <Link to={`/`}>
              <div className="flex items-center justify-center gap-2 text-2xl lg:text-3xl font-semibold mb-3 lg:mb-0">
                <span className="bg-amber-500 p-2 rounded-full">
                  <img src={logo} className="w-8 lg:w-10 " alt="" />
                </span>
                <span className="self-center whitespace-nowrap text-2xl md:text-3xl font-bold text-slate-200 flex items-end">
                  <span className="text-3xl md:text-4xl ">Q</span>{" "}
                  <span>uick</span>
                  <span className="text-3xl md:text-4xl ">T</span>{" "}
                  <span>ax</span>
                </span>
              </div>
            </Link>
            {/* social links */}
            <div className="text-white flex gap-5 justify-center items-center mt-5 md:mt-0">
              <span className="text-blue-500 w-6 h-6 hover:scale-125 duration-150">
                {" "}
                <FaFacebook className="w-full h-full"></FaFacebook>{" "}
              </span>
              <span className="text-pink-500 w-7 h- 7 hover:scale-125 duration-150">
                {" "}
                <FaInstagram className="w-full h-full"></FaInstagram>{" "}
              </span>
              <span className="text-red-600 w-7 h- 7 hover:scale-125 duration-150">
                {" "}
                <FaYoutube className="w-full h-full"></FaYoutube>{" "}
              </span>
              <span className=" w-7 h- 7 hover:scale-125 duration-150">
                {" "}
                <FaGithub className="w-full h-full"></FaGithub>{" "}
              </span>
            </div>

            {/* other links */}
            <Footer.LinkGroup className="flex gap-3 lg:gap-1 mt-4 md:mt-0 justify-center">
              <Footer.Link className="text-white">About</Footer.Link>
              <Footer.Link className="text-white">Privacy Policy</Footer.Link>
              <Footer.Link className="text-white">Licensing</Footer.Link>
              <Footer.Link className="text-white">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider className="dark:border-white" />
          <Footer.Copyright
            className="text-slate-300"
            by="QuickTax"
            year={2022}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonFooter;
