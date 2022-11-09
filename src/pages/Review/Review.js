import { Card } from "flowbite-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import "./Review.css";

const Review = ({ reviewDetails }) => {
  const yearMonthDayDateFormat = (date) => {
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = date.getFullYear();

    date = mm + "/" + dd + "/" + yyyy;
    return date;
  };

  const {
    _id,
    serviceTitle,
    reviewerName,
    reviewerImage,
    price,
    rating,
    email,
    review,
    date,
  } = reviewDetails;

  let reviewDate = new Date(date);

  let currentDate = new Date();

  reviewDate = new Date(yearMonthDayDateFormat(reviewDate));
  currentDate = new Date(yearMonthDayDateFormat(currentDate));

  const diffInMs = Math.abs(currentDate - reviewDate);
  const daysAgo = diffInMs / (1000 * 60 * 60 * 24);

  return (
    <div className="mx-auto w-full ">
      <Card className="review rounded-3xl">
        <div className="flex flex-col pb-10">
          <div className="flex items-center gap-5">
            <div className=" flex items-center justify-center ">
              <img
                className=" h-14 w-14 rounded-full shadow-lg"
                src={reviewerImage}
                alt=""
              />
            </div>
            <div>
              <h5 className="mb-1 text-lg font-medium text-center text-gray-900 dark:text-white">
                {reviewerName}
              </h5>
              <div className="flex flex-col md:flex-row gap-1 md:gap-3 items-center">
                <p className="text-amber-500 flex gap-1">
                  {[...Array(parseInt(rating))].map((x, idx) => (
                    <FaStar key={idx}></FaStar>
                  ))}
                </p>
                <span>
                  {isNaN(daysAgo) ? (
                    ""
                  ) : (
                    <span className="text-slate-600 dark:text-slate-100">{`${daysAgo} days ago`}</span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <span className="text-sm text-gray-500 italic dark:text-gray-400 mt-5">
            {review}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Review;
