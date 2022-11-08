import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginAndRegister/Login";
import Register from "../../pages/LoginAndRegister/Register";
import MyReviews from "../../pages/MyReviews/MyReviews";
import SearchedServices from "../../pages/SearchedServices/SearchedServices";
import Services from "../../pages/Services/Services";
import ServiceDetails from "../../pages/shared/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/services?limit=3"),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services/"),
      },
      {
        path: "/searchedServices/:searchQuery",
        element: <SearchedServices></SearchedServices>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/services?searchQuery=${params.searchQuery}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myReviews",
        element: <MyReviews></MyReviews>,
      },
      {
        path: "/addService",
        element: <AddService></AddService>,
      },
      {
        path: "/serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
