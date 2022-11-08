import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, price, description, image, rating } = service;
  const priceWithCommas = price.toLocaleString("en");

  return (
    <div className="max-w-sm">
      <Card className="serviceCard  ">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} className="rounded-lg" alt="" />
          </PhotoView>
        </PhotoProvider>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16 capitalize">
          {title}
        </h5>
        <h4 className="text-amber-400 text-xl font-bold">${priceWithCommas}</h4>
        <p className="font-normal h-24 text-gray-700 dark:text-gray-400">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </p>

        <Link to={`/serviceDetails/${_id}`}>
          <Button className="w-full" gradientMonochrome="cyan">
            See Details
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ServiceCard;
