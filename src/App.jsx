import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login-page",
      element: <Login/>,
    },
    {
      path: "/signup-page",
      element: <SignUp/>,
    },
    {
      path: "/contact",
      element: <ContactPage/>,
    },
    {
      path: "/about",
      element: <AboutPage/>,
    },
  ]);
  return <>
   <RouterProvider router={router} />
  </>;
}

export default App;
