import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTwo from "./pages/home/home-two";
import AllFood from "./pages/all-food/all-food";
import Grid from "./pages/all-food/grid";
import Help from "./pages/help";
import Dashboard from "./pages/dashboard";
import EditProfile from "./pages/dashboard/edit-profile";
import SignUp from "./pages/signup/signUp";
import SignIn from "./pages/signin";
import ShoppingCart from "./pages/shopping-cart";
import FoodDetails from "./pages/foodDetails/foodDetails";

/** HANDLERS **/

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTwo />,
  },
  {
    path: "/all-food",
    Component: AllFood,
    children: [
      {
        index: true,
        element: <Grid />,
      },
      {
        path: ":component",
        element: <Grid />,
      },
    ],
  },

  {
    path: "/help",
    element: <Help />,
  },

  {
    path: "/myprofile",
    Component: Dashboard,
    children: [
      {
        index: true,
        element: <EditProfile />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/food-details/:productId",
    element: <FoodDetails />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
