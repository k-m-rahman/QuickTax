import { Button, Label, Radio, Textarea, TextInput } from "flowbite-react";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddService = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const date = new Date();
    const serviceObject = {
      title,
      image: photo,
      price,
      rating,
      description,
      date,
    };

    fetch("https://quick-tax-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(serviceObject),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success(
            "Great suggestion!! The service was added successfully"
          );
          form.reset();
          navigate("/");
        }
      });
  };
  return (
    <div>
      <div className="pb-10 pt-7">
        <div className="mx-5 md:w-1/2 md:mx-auto mt-10 border p-5 pb-10 rounded-lg shadow-xl mb-10">
          <h2 className="text-xl font-semibold border-b-2 pb-2 text-center dark:text-slate-100 mb-5 ">
            Suggest Us A Service
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left w-10/12 mx-auto"
          >
            {/* service title */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Service Title" />
              </div>
              <TextInput
                id="serviceTitle"
                type="text"
                placeholder="Service Title"
                name="title"
                required={true}
                shadow={true}
              />
            </div>

            {/* service photo url */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="photo" value="Photo URL" />
              </div>
              <TextInput
                id="photo"
                type="text"
                placeholder="Service Photo URL"
                name="photo"
                shadow={true}
              />
            </div>

            {/* service price */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" />
              </div>
              <TextInput
                id="price"
                type="price"
                placeholder="Service Price"
                name="price"
                required={true}
                shadow={true}
              />
            </div>

            {/* rating */}
            <fieldset className="flex  gap-4" id="radio" name="rating">
              <legend className="dark:text-slate-100 text-sm font-semibold mb-1">
                Default Rating
              </legend>
              <div className="flex items-center gap-2">
                <Radio id="1" name="rating" value="1" />
                <Label htmlFor="1">1</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="2" name="rating" value="2" />
                <Label htmlFor="1">2</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="3" name="rating" value="3" />
                <Label htmlFor="1">3</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="4" name="rating" value="4"></Radio>
                <Label htmlFor="1">4</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="5" name="rating" value="5" defaultChecked={true} />
                <Label htmlFor="1">5</Label>
              </div>
            </fieldset>

            {/* service description */}
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="description" value="Service description" />
              </div>
              <Textarea
                id="description"
                type="text"
                name="description"
                placeholder="Leave a description..."
                required={true}
                rows={4}
              />
            </div>

            <Button type="submit">Add Service</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
