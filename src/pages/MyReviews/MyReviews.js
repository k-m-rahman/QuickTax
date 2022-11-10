import { Spinner, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "./ReviewRow/ReviewRow";
import noDataAnime from "../../assets/no-data.json";

import Lottie from "lottie-react";
import toast from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const MyReviews = () => {
  useTitle("My Reviews");
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState(null);
  const [forUpdateOrDelete, setForUpdateOrDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  //getting the reviews of an particular user (read)
  useEffect(() => {
    fetch(`https://quick-tax-server-side.vercel.app/myReviews/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("quickTax-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, [forUpdateOrDelete, user.email, logout]);

  // deleting a review (delete)
  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure to delete the review?");
    if (agree) {
      fetch(`https://quick-tax-server-side.vercel.app/reviews/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("quickTax-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setForUpdateOrDelete((prev) => !prev);
          if (data.deletedCount > 0) {
            toast.error("Deleted the review successfully");
          }
        });
    }
  };

  // conditional rendering
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

  // checking if the user have any reviews
  else if (reviews?.length === 0) {
    return (
      <div>
        <div className="w-60 mx-auto  flex justify-start">
          <Lottie animationData={noDataAnime} loop={true}></Lottie>
        </div>
        <h1 className="capitalize text-3xl md:text-4xl font-bold text-slate-700 dark:text-slate-100 text-center mb-16">
          No reviews to show !!!
        </h1>
      </div>
    );
  }
  // if the user have reviews then those reviews are showing in a table
  else {
    return (
      <div>
        <h2 className="capitalize text-center text-4xl md:text-5xl font-semibold text-slate-700 dark:text-slate-100 mb-10">
          Your Reviews
        </h2>
        <div className="p-5">
          <Table>
            <Table.Head>
              <Table.HeadCell>Service name</Table.HeadCell>
              <Table.HeadCell>Review</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {reviews?.map((review) => (
                <ReviewRow
                  key={review._id}
                  ownReview={review}
                  handleDelete={handleDelete}
                  setForUpdateOrDelete={setForUpdateOrDelete}
                ></ReviewRow>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
};

export default MyReviews;
