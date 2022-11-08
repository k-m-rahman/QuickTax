import {
  Avatar,
  Button,
  Dropdown,
  Navbar,
  TextInput,
  Tooltip,
} from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink, ScrollRestoration } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { ThemeContext } from "../../../contexts/ThemeProvider";
import { addDarkModeDataToDb } from "../../../utils/fakeDb";
import { FaMoon, FaSun, FaSearch } from "react-icons/fa";
import logo from "../../../assets/tax.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSearchService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service = form.service.value;
    form.reset();
    navigate(`/searchedServices/${service}`);
  };

  const themeChanger = () => {
    setDarkMode(!darkMode);
    addDarkModeDataToDb(!darkMode);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.error("Logged Out!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="shadow-md md:pb-5 lg:pb-0 bg-[#c1c2ff] text-center sticky top-0 z-10 dark:bg-slate-800">
      <Navbar className="bg-[#c1c2ff]  rounded-none pt-4 pb-6 " fluid={true}>
        <NavLink className="flex " to="/">
          <div className="flex gap-2">
            <span className="bg-amber-500 p-2 rounded-full">
              <img src={logo} className="w-8 lg:w-10 " alt="" />
            </span>
            <span className="self-center whitespace-nowrap text-2xl md:text-3xl font-bold dark:text-white flex items-end">
              <span className="text-3xl md:text-4xl ">Q</span> <span>uick</span>
              <span className="text-3xl md:text-4xl ">T</span> <span>ax</span>
            </span>
          </div>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <ScrollRestoration></ScrollRestoration>
          <form
            onSubmit={handleSearchService}
            className="relative mb-2 lg:mb-0 md:hidden lg:block"
          >
            <TextInput
              className=" lg:w-[300px] "
              id="service"
              name="service"
              type="text"
              placeholder="Search your desired service"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/3 cursor-pointer"
            >
              <FaSearch></FaSearch>
            </button>
          </form>
          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-violet-100 p-2 rounded-md  sm:hover:scale-110 mb-1"
                : "bg-violet-400 font-bold  p-2 rounded-md sm:hover:scale-110 mb-1"
            }
            to="/services"
          >
            Services
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              !isActive
                ? "bg-violet-100 p-2 rounded-md  sm:hover:scale-110 mb-1"
                : "bg-violet-400 font-bold  p-2 rounded-md sm:hover:scale-110 mb-1"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>

          {user ? (
            <>
              <NavLink
                className={({ isActive }) =>
                  !isActive
                    ? "bg-violet-100 p-2 rounded-md  sm:hover:scale-110 mb-1"
                    : "bg-violet-400 font-bold  p-2 rounded-md sm:hover:scale-110 mb-1"
                }
                to="/myReviews"
              >
                My Reviews
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  !isActive
                    ? "bg-violet-100 p-2 rounded-md  sm:hover:scale-110 mb-1"
                    : "bg-violet-400 font-bold  p-2 rounded-md sm:hover:scale-110 mb-1"
                }
                to="/addService"
              >
                Add Service
              </NavLink>

              <span className=" flex justify-center ">
                <Dropdown
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      className="border border-gray-300  rounded-full sm:hover:scale-110"
                      alt="User "
                      img={user?.photoURL}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <Link to="/profile">
                      <span className="block text-sm">
                        {user.displayName ? user?.displayName : ""}
                      </span>
                      <span className="block truncate text-sm font-medium">
                        {user?.email}
                      </span>
                    </Link>
                  </Dropdown.Header>

                  <Dropdown.Item>
                    <button onClick={handleLogout}>Sign out</button>
                  </Dropdown.Item>
                </Dropdown>
              </span>
            </>
          ) : (
            <NavLink
              className={({ isActive }) =>
                !isActive
                  ? "bg-violet-100 p-2 rounded-md  sm:hover:scale-110 mb-1"
                  : "bg-violet-400 font-bold  p-2 rounded-md sm:hover:scale-110 mb-1"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}

          <Button
            className="w-[50px] mx-auto mt-1 md:hidden lg:block"
            onClick={themeChanger}
            color={darkMode ? `dark` : `light`}
          >
            {darkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <div className="mt-1 w-1/2 mx-auto  hidden md:grid grid-cols-6 gap-2 lg:hidden">
        <form onSubmit={handleSearchService} className="relative col-span-5">
          <TextInput
            className=" lg:w-[300px] "
            id="service"
            name="service"
            type="text"
            placeholder="Search your desired service"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/3 cursor-pointer"
          >
            <FaSearch></FaSearch>
          </button>
        </form>
        <Button
          className="w-[50px] mx-auto mt-1 "
          onClick={themeChanger}
          color={darkMode ? `dark` : `light`}
        >
          {darkMode ? <FaSun></FaSun> : <FaMoon></FaMoon>}
        </Button>
      </div>
    </div>
  );
};

export default Header;
