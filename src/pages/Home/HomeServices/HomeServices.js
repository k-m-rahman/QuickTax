import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";

const HomeServices = ({ services }) => {
  return (
    <div>
      <div className="flex flex-col gap-3 mb-10 mt-20">
        <h1 className="text-3xl md:text-5xl capitalize text-center font-semibold">
          Here's how I can help you
        </h1>
        <p className="font-semibold text-slate-600 text-center">
          Browse my services and find the perfect tax preparation solution
          you've been searching for.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <Button gradientMonochrome="purple" className="mx-auto w-32">
        <Link to="/services">See All</Link>
      </Button>
    </div>
  );
};

export default HomeServices;
