
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./src/components/Header";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Footer } from "./src/components/Footer";
import { Body } from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: '/restaurant/:resId', element: <RestaurantMenu /> }
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
