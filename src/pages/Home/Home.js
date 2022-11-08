import { Button } from "flowbite-react";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ServiceCard from "../shared/ServiceCard/ServiceCard";
import HomeServices from "./HomeServices/HomeServices";
import Slider from "./Slider/Slider";

const Home = () => {
  const services = useLoaderData();

  return (
    <div>
      <Slider></Slider>
      <HomeServices services={services}></HomeServices>
    </div>
  );
};

export default Home;
