import { Button, Label, Modal, Radio, Table, Textarea } from "flowbite-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ReviewRow = ({ ownReview, handleDelete, setForUpdateOrDelete }) => {
  const { serviceTitle, rating, review, _id } = ownReview;
  const [showModal, setShowModal] = useState(false);

  // updating a review
  const displayModal = () => {
    setShowModal(true);
  };

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
              onClick={() => handleDelete(_id)}
            >
              X
            </Button>
            <Button gradientMonochrome="info" onClick={() => displayModal(_id)}>
              Update
            </Button>
          </div>
        </Table.Cell>
      </Table.Row>

      {/* modal */}
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
    </>
  );
};

export default ReviewRow;
