import { Button, Label, Modal, Radio, Table, Textarea } from "flowbite-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import deleteIcon from "../../../assets/icons/delete.svg";
import updateIcon from "../../../assets/icons/update.svg";

const ReviewRow = ({ ownReview, setForUpdateOrDelete, setLoading }) => {
  const { serviceTitle, rating, review, _id } = ownReview;
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //displaying the delete confirmation modal
  const displayDeleteModal = (id) => {
    setShowDeleteModal(true);
  };

  // displaying the form modal for update
  const displayUpdateModal = () => {
    setShowModal(true);
  };

  const agreeToDelete = () => {
    setShowDeleteModal(false);
    setLoading(true);
    handleDelete(true);
  };

  const disagreeToDelete = () => {
    setShowDeleteModal(false);
    handleDelete(false);
  };

  // deleting a review (delete)
  const handleDelete = (agree) => {
    // const agree = window.confirm("Are you sure to delete the review?");
    if (agree) {
      fetch(`https://quick-tax-server-side.vercel.app/reviews/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("quickTax-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            setForUpdateOrDelete((prev) => !prev);
            toast.error("Deleted the review successfully");
            setLoading(false);
          }
        });
    }
  };

  // updating the review
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const rating = form.rating.value;
    const review = form.review.value;
    console.log(rating, review);
    fetch(`https://quick-tax-server-side.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("quickTax-token")}`,
      },
      body: JSON.stringify({ rating, review }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast.success("Your review is updated");
        setForUpdateOrDelete((prev) => !prev);
        setShowModal(false);
      });
  };

  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {serviceTitle}
        </Table.Cell>
        <Table.Cell>{review}</Table.Cell>
        <Table.Cell>{rating}</Table.Cell>
        <Table.Cell className=" flex justify-center ">
          <div className="flex gap-3  lg:w-full justify-around">
            <Button
              gradientMonochrome="failure"
              onClick={() => displayDeleteModal()}
            >
              Delete{" "}
              <img
                className="w-5 mx-1 md:w-6 md:ml-2"
                src={deleteIcon}
                alt=""
              />
            </Button>
            <Button
              gradientMonochrome="info"
              onClick={() => displayUpdateModal(_id)}
            >
              Update{" "}
              <img
                className="w-5 mx-1 md:w-6 md:ml-2"
                src={updateIcon}
                alt=""
              ></img>
            </Button>
          </div>
        </Table.Cell>
      </Table.Row>

      {/* modal for updating review */}
      <React.Fragment>
        <Modal
          show={showModal}
          size="md"
          popup={true}
          onClose={() => setShowModal(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Update This Review
              </h3>
              <form onSubmit={handleUpdate} className="space-y-6 ">
                {/* rating */}
                <fieldset className="flex  gap-4" id="radio" name="rating">
                  <legend className="dark:text-slate-100 text-sm font-semibold mb-1">
                    Update the rating
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio id="1" name="rating" value="1" />
                    <Label htmlFor="1">1</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio id="2" name="rating" value="2" />
                    <Label htmlFor="2">2</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio id="3" name="rating" value="3" />
                    <Label htmlFor="3">3</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio id="4" name="rating" value="4"></Radio>
                    <Label htmlFor="4">4</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="5"
                      name="rating"
                      value="5"
                      defaultChecked={true}
                    />
                    <Label htmlFor="5">5</Label>
                  </div>
                </fieldset>

                {/* review */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="review" value="Update your review" />
                  </div>
                  <Textarea id="review" type="text" defaultValue={review} />
                </div>

                <div className="w-full ">
                  <Button type="submit">Update</Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>

      {/* confirmation modal for delete */}
      <React.Fragment>
        <Modal
          show={showDeleteModal}
          size="md"
          popup={true}
          onClose={() => {
            setShowDeleteModal(false);
          }}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this review?
              </h3>
              <div className="flex justify-center gap-4">
                <Button color="failure" onClick={agreeToDelete}>
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={disagreeToDelete}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </>
  );
};

export default ReviewRow;
