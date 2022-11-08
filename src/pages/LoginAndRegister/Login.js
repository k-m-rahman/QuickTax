import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { providerLogin, login, setLoading, resetPassword } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const [userEmail, setUserEmail] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const gitHubProvider = new GithubAuthProvider();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Logged in successfully!", { duration: 2000 });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGithubSignIn = () => {
    providerLogin(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Logged in successfully!", { duration: 2000 });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        setError("");
        toast.success("Logged in successfully!", { duration: 2000 });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
  };

  const handleResetPassword = () => {
    if (userEmail) {
      resetPassword(userEmail)
        .then(() => {
          toast.success(
            "Password reset email has been sent. Please, check your email!",
            { duration: 2000 }
          );
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      toast("Please provide your email!");
    }
  };

  return (
    <div className="dark:bg-slate-600  py-10">
      <div className="mx-5 md:w-1/2 md:mx-auto my-10 border p-5 pb-10 rounded-lg shadow-xl">
        <div>
          <h3 className="text-3xl dark:text-slate-200 font-semibold mb-4">
            Login
          </h3>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 text-left w-10/12 mx-auto"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Email" />
            </div>
            <TextInput
              onBlur={handleEmailBlur}
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
              <Label htmlFor="password2" value="Password" />
            </div>
            <TextInput
              id="password2"
              type="password"
              name="password"
              placeholder="Your Password"
              required={true}
              shadow={true}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center gap-2">
            <Label>
              Don't have any account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:underline dark:text-blue-300"
                state={{ from: from }}
                replace
              >
                Register
              </Link>
            </Label>
          </div>
          <Button type="submit">Login</Button>

          <div className="flex items-center gap-2">
            <Label>
              Forgot Password?
              <span
                onClick={handleResetPassword}
                className="text-blue-600 hover:underline ml-2 dark:text-blue-300"
              >
                Reset Password
              </span>
            </Label>
          </div>
        </form>
        <div className="flex flex-col gap-4 mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="border-gray-300 w-10/12 rounded-lg border p-3 bg-slate-200 hover:bg-slate-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaGoogle></FaGoogle>
            <span>Google Sign In</span>
          </button>
          <button
            onClick={handleGithubSignIn}
            className="border-gray-300 w-10/12 rounded-lg border p-3 bg-slate-200 hover:bg-slate-300 flex items-center justify-center gap-2 mx-auto"
          >
            <FaGithub></FaGithub>
            <span>Github Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
