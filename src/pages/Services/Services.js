import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../shared/ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");
  // const services = useLoaderData();
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://quick-tax-server-side.vercel.app/services/")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner
          className="mt-10 "
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
