import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import HomeServices from "./HomeServices/HomeServices";
import Intro from "./Intro/Intro";
import Slider from "./Slider/Slider";
import WhyChooseMe from "./WhyChooseMe/WhyChooseMe";

const Home = () => {
  useTitle("Home");

  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://quick-tax-server-side.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

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

  return (
    <div>
      <Slider></Slider>
      <Intro></Intro>
      <HomeServices services={services}></HomeServices>
      <WhyChooseMe></WhyChooseMe>
    </div>
  );
};

export default Home;
