import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import Review from "../../Review/Review";
import "./ServiceDetails.css";
import ServiceDetailsCard from "./ServiceDetailsCard/ServiceDetailsCard";
import WriteReview from "./WriteReview/WriteReview";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { _id } = service;

  const [reviews, setReviews] = useState(null);
  const [forUpdate, setForUpdate] = useState(false);
  const [reviewGiven, setReviewGiven] = useState(false);

  const { user } = useContext(AuthContext);

  const location = useLocation();

  // checking whether the user has given any review of this specific service already

  useEffect(() => {
    reviews?.forEach((review) => {
      if (review?.email === user?.email) {
        setReviewGiven(true);
      }
    });
  }, [user?.email, reviews]);

  useEffect(() => {
    fetch(
      `https://quick-tax-server-side-k-m-rahman.vercel.app/reviews?serviceId=${_id}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id, forUpdate]);

  // console.log(reviews);
  return (
    <div>
      {/* service details card */}
      <ServiceDetailsCard key={_id} service={service}></ServiceDetailsCard>

      {/* reviews */}
      {reviews?.length > 0 && (
        <div>
          <h3 className="capitalize mt-20 text-center text-3xl w-3/4 mx-auto md:text-4xl font-bold dark:text-slate-100 italic">
            Reviews of our valued clients
          </h3>
          <div className="grid grid-cols-1 w-3/4 mx-auto my-10 gap-5">
            {reviews?.map((reviewDetails) => (
              <Review
                key={reviewDetails._id}
                reviewDetails={reviewDetails}
              ></Review>
            ))}
          </div>
        </div>
      )}
      {/* add review section */}
      {user ? (
        reviewGiven ? (
          <h2 className="capitalize text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-100 text-center my-20 w-3/4 mx-auto">
            You can update your reviews in{" "}
            <Link className="text-blue-500 dark:text-amber-500" to="/myReviews">
              my reviews
            </Link>{" "}
            page
          </h2>
        ) : (
          <WriteReview
            setForUpdate={setForUpdate}
            service={service}
          ></WriteReview>
        )
      ) : (
        <div>
          <h4 className="text-center capitalize text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-100 my-10">
            Please{" "}
            <span className="text-blue-500 dark:text-amber-500">
              {" "}
              <Link to="/login" state={{ from: location }}>
                Login
              </Link>{" "}
            </span>{" "}
            to add review
          </h4>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
