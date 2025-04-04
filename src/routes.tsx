import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeTwo from "./pages/home-two";
import AllFood from "./pages/all-food/all-food";
import List from "./pages/all-food/list";
import Grid from "./pages/all-food/grid";
import Help from "./pages/help";
import Dashboard from "./pages/dashboard";
import EditProfile from "./pages/dashboard/edit-profile";
import Address from "./pages/dashboard/address";
import Order from "./pages/dashboard/order";
import Wishlist from "./pages/dashboard/wishlist";
import Reviews from "./pages/dashboard/reviews";
import ChangePassword from "./pages/dashboard/changePassword";
import SignUp from "./pages/signup/signUp";
import SignIn from "./pages/signin";
import ShoppingCart from "./pages/shopping-cart";

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
        path: "list",
        element: <List />,
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
      {
        path: "edit-address",
        element: <Address />,
      },
      {
        path: "order&recordering",
        element: <Order />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
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
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
