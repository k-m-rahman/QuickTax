import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      This is home
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

export default Home;
