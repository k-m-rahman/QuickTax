import { Button, Card } from "flowbite-react";
import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, price, description, image, rating } = service;
  const priceWithCommas = price.toLocaleString("en");

  return (
    <div className="max-w-sm">
      <Card>
        <img src={image} alt="" className=" rounded-lg h-[300px]" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16">
          {title}
        </h5>
        <h4 className="text-amber-400 text-xl font-bold">
          Tk {priceWithCommas}
        </h4>
        <p className="font-normal h-24 text-gray-700 dark:text-gray-400">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <Button gradientMonochrome="purple">See Details</Button>
      </Card>
    </div>
  );
};

export default ServiceCard;
