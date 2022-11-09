import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
import converter from "number-to-words";
import useTitle from "../../hooks/useTitle";

const SearchedServices = () => {
  useTitle("Searched services");
  const services = useLoaderData();
  return (
    <div>
      <h3 className="text-5xl font-bold text-amber-400 underline text-center py-7 capitalize">
        {services.length > 1
          ? `${converter.toWords(services.length)} services were found`
          : services.length === 1
          ? `One service was found`
          : `Zero service was found`}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default SearchedServices;
