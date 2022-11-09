import { Button, Modal, Table } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import ReviewRow from "./ReviewRow/ReviewRow";
import noDataAnime from "../../assets/no-data.json";
import attention from "../../assets/attention.json";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState(null);
  const [forUpdateOrDelete, setForUpdateOrDelete] = useState(false);
  // const [confirm, setConfirm] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    fetch(
      `https://quick-tax-server-side.vercel.app/reviews?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [forUpdateOrDelete, user.email]);

  console.log(reviews);

  // deleting a review
  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure to delete the review?");
    if (agree) {
      fetch(`https://quick-tax-server-side.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setForUpdateOrDelete((prev) => !prev);
          if (data.deletedCount > 0) {
            toast.error("Deleted the review successfully");
            // setConfirm(false);
          }
        });
    }
  };

  // const displayModal = () => {
  //   setShowModal(true);
  //   return confirm;
  // };

  // console.log(confirm);

  // // modal confirm or not confirm
  // const yesSure = () => {
  //   setConfirm(true);
  //   setShowModal(false);
  // };

  // const noCancel = () => {
  //   setConfirm(false);
  //   setShowModal(false);
  // };

  // checking if the user have any reviews
  if (reviews?.length === 0) {
    return (
      <div>
        <div className="w-60 mx-auto  flex justify-start">
          <Lottie animationData={noDataAnime} loop={true}></Lottie>
        </div>
        <h1 className="capitalize text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-100 text-center mb-16">
          No reviews to show !!!
        </h1>
      </div>
    );
  }
  // if the user have reviews then those reviews are showing in a table
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
              ></ReviewRow>
            ))}
          </Table.Body>
        </Table>

        {/* modal */}
        {/* <React.Fragment>
          <Modal
            show={showModal}
            size="md"
            popup={true}
            onClose={() => setShowModal(false)}
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center ">
               
                <Lottie
                  className="h-14 w-14 mx-auto mb-4 text-gray-400 dark:text-gray-200"
                  animationData={attention}
                  loop={true}
                ></Lottie>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <div className="flex justify-center gap-4">
                  <Button color="failure" onClick={yesSure}>
                    Yes, I'm sure
                  </Button>
                  <Button color="gray" onClick={noCancel}>
                    No, cancel
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </React.Fragment> */}
      </div>
    </div>
  );
};

export default MyReviews;
