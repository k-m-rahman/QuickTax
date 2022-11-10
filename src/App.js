import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route/Route";
import { useContext, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeProvider";
import { getStoredDarkModeData } from "./utils/fakeDb";
import { Toaster } from "react-hot-toast";

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const storedDarkModeData = getStoredDarkModeData();
    setDarkMode(storedDarkModeData);
  }, []);

  return (
    <div
      className={
        darkMode
          ? `"App dark min-h-screen  mx-auto"`
          : `"App min-h-screen  mx-auto"`
      }
    >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
