import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

import swal from "sweetalert";

const Register = () => {
  const [error, setError] = useState("");
  const { signUp, updateUserProfile, verifyEmail, setLoading, setUser } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // validating password
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError("Password must have at least one special character");
      return;
    }

    // registration
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        form.reset();
        setError("");
        handleEmailVerification();
        handleProfileUpdate(name, photo);
        navigate(from, { replace: true });
        swal(
          "User Created successfully!",
          "Please verify your email!",
          "success"
        );
      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // email verification
  const handleEmailVerification = () => {
    verifyEmail();
  };

  // updating user name and photo

  const handleProfileUpdate = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    updateUserProfile(profile)
      .then(() => {
        console.log("User name and photo updated");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="dark:bg-slate-600  py-10">
      <div className="mx-5 md:w-1/2 md:mx-auto mt-10 border p-5 pb-10 rounded-lg shadow-xl mb-10">
        <div>
          <h3 className="text-3xl font-semibold mb-4 dark:text-slate-200">
            Register
          </h3>
        </div>
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
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="Your Email"
              name="email"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              placeholder="Your Password"
              name="password"
              required={true}
              shadow={true}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center gap-2">
            <Label htmlFor="agree">
              Already have any account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline dark:text-blue-300"
              >
                Login
              </Link>
            </Label>
          </div>
          <Button type="submit">Register</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
