import { Card } from "flowbite-react";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = ({ reviewDetails }) => {
  const {
    _id,
    serviceTitle,
    reviewerName,
    reviewerImage,
    price,
    rating,
    email,
    review,
  } = reviewDetails;
  return (
    <div className="mx-auto w-full">
      <Card className="bg-[rgb(203,213,225)] rounded-3xl">
        <div className="flex flex-col  pb-10">
          <div className="flex gap-5">
            <img
              className="mb-3 h-14 w-14 rounded-full shadow-lg"
              src={reviewerImage}
              alt=""
            />
            <div>
              <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                {reviewerName}
              </h5>
              <p className="text-amber-500 flex gap-1">
                {[...Array(parseInt(rating))].map((x, idx) => (
                  <FaStar key={idx}></FaStar>
                ))}
              </p>
            </div>
          </div>
          <span className="text-sm text-gray-500 italic dark:text-gray-400">
            {review}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Review;
