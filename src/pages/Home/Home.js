import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
import HomeServices from "./HomeServices/HomeServices";
import Intro from "./Intro/Intro";
import Slider from "./Slider/Slider";
import WhyChooseMe from "./WhyChooseMe/WhyChooseMe";

const Home = () => {
  const services = useLoaderData();

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
