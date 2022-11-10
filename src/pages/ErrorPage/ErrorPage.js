import React from "react";
import CommonFooter from "../shared/Footer/CommonFooter";
import Header from "../shared/Header/Header";
import errorAnime from "../../assets/error.json";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import { Button } from "flowbite-react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <Header></Header>
      <div className="dark:bg-slate-400 pb-20">
        <h3 className="text-4xl text-center md:text-6xl dark:text-red-600 py-5 capitalize font-bold  w-fit mx-auto p-2 rounded">
          Something went wrong...
        </h3>
        <div className="  flex justify-center items-center ">
          <Lottie
            className="w-2/3 md:w-1/5"
            animationData={errorAnime}
            loop={true}
          ></Lottie>
        </div>

        {error && (
          <div className="my-5 text-center flex flex-col gap-3">
            <span className="text-9xl font-bold text-slate-700 dark:text-slate-800">
              {error?.status}
            </span>
            <span className="text-3xl font-semibold">{error?.statusText}</span>
          </div>
        )}
        <div className="flex justify-center items-center">
          <Link to={`/`}>
            <Button className="mx-auto " gradientMonochrome="purple">
              Go to homepage
            </Button>
          </Link>
        </div>
      </div>
      <CommonFooter></CommonFooter>
    </div>
  );
};

export default ErrorPage;
