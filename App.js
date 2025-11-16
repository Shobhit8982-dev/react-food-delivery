
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
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

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const root = createRoot(document.getElementById('root'));
// root.render(<AppLayout/>)

//--------------------------------------------------------------------------

// Great question! In <RestaurantCard resObj={resObj} />, the first resObj is the prop name (what the child component will receive), and the second resObj is the variable or object you are passing from the parent.

// So:

// The left side (resObj=) is the prop name for the child.
// The right side ({resObj}) is the actual data (object) you want to send.
// This lets you choose any prop name you want, and pass any variable or value you want.

// -------------------------------------------------------

// You can pass props in React using these main syntaxes:

// 1. As individual attributes (most common)
// <Component name="Shobhit" age={25} />
// 2. Using the spread operator (to pass all properties of an object)
// const user = { name: "Shobhit", age: 25 };
// <Component {...user} />
// 3. Passing a whole object as a single prop
// const user = { name: "Shobhit", age: 25 };
// <Component user={user} />

// Summary:

// Individual attributes
// Spread operator
// Object as a single prop

// Here’s a simple flow of how props are passed in your code:

// 1. Define the data object
// // app.js
// const resObj = {
//   name: "Olio - The Wood Fired Pizzeria",
//   avgRating: 4.4,
//   cuisines: ["Pizzas", "Pastas", "Italian"],
//   areaName: "Vijaya Nagar"
// };

// 2. Pass the object as a prop from the parent component
// // app.js (inside your parent component, e.g., AppLayout)
// <RestaurantCard resObj={resObj} />

// 3. Receive the prop in the child component

// // app.js
// const RestaurantCard = (props) => {
//   // Access the prop as props.resObj
//   return (
//     <div>
//       <h3>{props.resObj.name}</h3>
//       <h4>{props.resObj.avgRating}</h4>
//       <h4>{props.resObj.cuisines.join(", ")}</h4>
//       <h4>{props.resObj.areaName}</h4>
//     </div>
//   );
// };

// Or using destructuring:

// const RestaurantCard = ({ resObj }) => (
//   <div>
//     <h3>{resObj.name}</h3>
//     <h4>{resObj.avgRating}</h4>
//     <h4>{resObj.cuisines.join(", ")}</h4>
//     <h4>{resObj.areaName}</h4>
//   </div>
// );

// resObj (data object)
//       |
//       v
// <RestaurantCard resObj={resObj} />   <-- Parent passes prop
//       |
//       v
// RestaurantCard receives props.resObj  <-- Child uses prop

// Summary:

// You define resObj in your file.
// You pass it as a prop to <RestaurantCard resObj={resObj} />.
// The RestaurantCard component receives it as props.resObj and uses its values.
