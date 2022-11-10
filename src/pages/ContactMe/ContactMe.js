import { Button, Label, Textarea, TextInput } from "flowbite-react";
import React from "react";
import useTitle from "../../hooks/useTitle";
import contactAnime from "../../assets/contactMe.json";
import Lottie from "lottie-react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  useTitle("Contact Me");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    swal("Message Received!", "I will contact you soon!", "success");
    event.target.reset();
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row   md:my-10">
        <div className=" w-full md:w-1/2 p-5 md:pl-20 text-center md:text-start flex flex-col justify-center">
          <h2 className="capitalize text-4xl md:text-5xl font-semibold text-slate-700 dark:text-slate-100 ">
            Contact me
          </h2>
          <h5 className="text-xl my-5 text-slate-500 dark:text-slate-200">
            Don't hesitate to contact me via email if you have any questions or
            want to learn more.
          </h5>
          <p className="font-semibold text-slate-500 dark:text-slate-200">
            I am ready if you're ready! Get in touch with me today if you have
            any general questions or want to work with me!
          </p>
          <div className="flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-left w-full mt-10 mx-auto"
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Full Name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required={true}
                  shadow={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Your Message" />
                </div>
                <Textarea
                  id="message"
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  required={true}
                  shadow={true}
                />
              </div>

              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
        <div className="  mx-auto w-full md:w-2/5">
          <Lottie animationData={contactAnime} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
