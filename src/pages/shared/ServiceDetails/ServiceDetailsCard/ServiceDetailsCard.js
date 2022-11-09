import React, { useEffect } from "react";
import { Card } from "flowbite-react";
import "./ServiceDetailsCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const ServiceDetailsCard = ({ service }) => {
  const { _id, image, title, description, price, rating } = service;

  useEffect(() => {
    AOS.init();
  }, []);

  const priceWithCommas = Number(price).toLocaleString("en");
  return (
    <div className="flex justify-center ">
      <Card
        className="card bg-color mx-5 md:mx-0 lg:min-w-[900px]"
        horizontal={true}
        imgSrc={image}
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
          {title}
        </h5>
        <h4 className="text-amber-400  font-bold text-xl flex flex-col gap-2 ">
          <p className="text-amber-500 flex gap-1">
            {[...Array(parseInt(rating))].map((x, idx) => (
              <FaStar key={idx}></FaStar>
            ))}
          </p>
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
