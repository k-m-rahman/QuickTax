import React from "react";
import { Card } from "flowbite-react";

const ServiceDetailsCard = ({ service }) => {
  const { _id, image, title, description, price, rating } = service;
  const priceWithCommas = price.toLocaleString("en");
  return (
    <div className="flex justify-center ">
      <Card
        className="card bg-fuchsia-100 mx-5 md:mx-0 lg:min-w-[900px]"
        horizontal={true}
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {title}
        </h5>
        <h4 className="text-amber-400  font-bold text-xl flex flex-col gap-2 ">
          <span>Rating: {rating}</span>
          <span> ${priceWithCommas}</span>
        </h4>

        <p className="font-medium text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Card>
    </div>
  );
};

export default ServiceDetailsCard;
