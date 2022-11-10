import { Button, Label, Radio, Textarea, TextInput } from "flowbite-react";
import React, { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { FaStar } from "react-icons/fa";

const WriteReview = ({ service, setForUpdate }) => {
  const { user } = useContext(AuthContext);
  const displayNameRef = useRef(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  // handling review form
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const review = form.review.value;
    const rating = parseInt(form.rating.value);

    // getting the time and date of the review
    const date = new Date();

    console.log(rating);
    const reviewObject = {
      serviceId: service._id,
      serviceTitle: service.title,
      price: service.price,
      review: review,
      reviewerName: name,
      email: user.email,
      reviewerImage: photo,
      rating: rating,
      date,
    };

    // creating a review
    fetch("https://quick-tax-server-side.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("quickTax-token")}`,
      },
      body: JSON.stringify(reviewObject),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Your review added successfully");
          setForUpdate((prev) => !prev);
          form.reset();
          <ScrollRestoration></ScrollRestoration>;
        }
      });
  };
  return (
    <div>
      <div className="pb-10 pt-7">
        <div className="mx-5 md:w-1/2 md:mx-auto mt-10 border p-5 pb-10 rounded-lg shadow-xl mb-10">
          <h2 className="text-xl font-semibold border-b-2 pb-2 text-center dark:text-slate-100 mb-5 ">
            Add Your Review
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left w-10/12 mx-auto"
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Your Full Name"
                name="name"
                required={true}
                shadow={true}
                defaultValue={user?.displayName}
                ref={displayNameRef}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="Photo URL" />
              </div>
              <TextInput
                id="photo"
                type="text"
                placeholder="Photo URL"
                name="photo"
                shadow={true}
                defaultValue={user?.photoURL}
                ref={photoURLRef}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email ( cannot be updated )" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="Your Email"
                name="email"
                required={true}
                shadow={true}
                defaultValue={user.email}
                readOnly
              />
            </div>

            {/* rating */}
            <fieldset className="flex  gap-4" id="radio" name="rating">
              <legend className="dark:text-slate-100 text-sm font-semibold mb-1">
                Rate the service
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
                <Radio id="5" name="rating" value="5" defaultChecked={true} />
                <Label htmlFor="5">5</Label>
              </div>
            </fieldset>

            {/* review */}
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="review" value="Your review" />
              </div>
              <Textarea
                id="review"
                type="text"
                name="review"
                placeholder="Leave a review..."
                required={true}
                rows={4}
              />
            </div>

            <Button type="submit">Add Review</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
