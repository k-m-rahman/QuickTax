import { Button, Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../shared/ServiceCard/ServiceCard";

const Services = () => {
  useTitle("Services");

  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [totalCards, setTotalCards] = useState(0);

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  console.log("cards per page,", cardsPerPage);
  console.log("current page,", currentPage);
  //-------------------
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?currentPage=${currentPage}&cardsPerPage=${cardsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotalCards(data.count);
        setServices(data.services);
        setLoading(false);
      });
  }, [currentPage, cardsPerPage]);

  const handlePagination = (number) => {
    if (number !== currentPage) {
      setLoading(true);
    }
    setCurrentPage(number);
    window.scrollTo(0, 0);
  };

  const handleDropDown = (event) => {
    setCurrentPage(0);
    setCardsPerPage(event.target.value);
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:gap-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      {/* pagination */}
      <div className=" flex justify-center items-center mt-5">
        {[...Array(totalPages).keys()].map((number) => (
          <Button
            key={number}
            onClick={() => {
              handlePagination(number);
            }}
            color={currentPage === number ? "failure" : "warning"}
            className="mx-1"
          >
            {number + 1}
          </Button>
        ))}
        <select
          defaultValue={cardsPerPage}
          className="bg-sky-300 rounded-lg hover:bg-sky-400 border-none font-semibold ml-4"
          onChange={(event) => {
            handleDropDown(event);
          }}
        >
          <option className="bg-slate-100" value="3">
            3
          </option>
          <option className="bg-slate-100" value="6">
            6
          </option>
        </select>
      </div>
    </div>
  );
};

export default Services;
