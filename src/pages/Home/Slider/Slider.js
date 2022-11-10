import { Button, Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="h-60  sm:h-[450px]  rounded-none mx-2 lg:mx-4 ">
      <Carousel slideInterval={5000}>
        <div className="h-full bg-no-repeat  text-white bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] flex justify-center items-center">
          <div className="text-center shadow-xl bg-black bg-opacity-50 p-10 rounded-lg">
            <h2
              className="capitalize text-2xl md:text-4xl   lg:text-5xl font-bold  p-2 md:p-5 "
              style={{ textShadow: "2px 2px 5px violet" }}
            >
              Taxes made easy...{" "}
            </h2>
            <p className="font-semibold  w-fit  mx-auto">
              Tax Professionals for Businesses
            </p>
            <div className="flex justify-center items-center">
              <Link to="/contactMe">
                <Button className="mx-auto md:mt-5" color="info">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full bg-no-repeat  text-white bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80')] flex justify-center items-center">
          <div className="text-center shadow-xl bg-black bg-opacity-50 p-10 rounded-lg">
            <h2
              className="capitalize text-2xl md:text-4xl   lg:text-5xl font-bold  p-2 md:p-5 "
              style={{ textShadow: "2px 2px 5px violet" }}
            >
              Don't despair!{" "}
            </h2>
            <p className="font-semibold  w-fit  mx-auto">
              The hardest thing in the world to understand is the income tax.
            </p>
            <div className="flex justify-center items-center">
              <Link to="/contactMe">
                <Button className="mx-auto md:mt-5" color="info">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full bg-no-repeat  text-white bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1514108225820-2b602873ac36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] flex justify-center items-center">
          <div className="text-center shadow-xl bg-black bg-opacity-50 p-10 rounded-lg">
            <h2
              className=" capitalize text-2xl md:text-4xl   lg:text-5xl font-bold  p-2 md:p-5 "
              style={{ textShadow: "2px 2px 5px violet" }}
            >
              You must pay taxes!!{" "}
            </h2>
            <p className="font-semibold  w-fit  mx-auto">
              A fine is a tax for doing something wrong. A tax is a fine for
              doing something right.
            </p>

            <div className="flex justify-center items-center">
              <Link to="/contactMe">
                <Button className="mx-auto md:mt-5" color="info">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
