import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import ErrorPage from "../views/ErrorPage";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getItem, removeItem } from "../utils/storage";
import Signup from "../views/Signup";
import ProductsPage from "../views/ProductsPage";

// eslint-disable-next-line react/prop-types
const AuthRoute = ({ component: Component }) => {
  // Check if the user is authenticated
  const isAuthenticated = () => {
    try {
      const token = getItem("token");
      if (token) {
        // Decode the token
        const decodedToken = jwtDecode(token);
        // Check if the token is still valid (e.g., not expired)
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp > currentTime) {
          return true;
        }
        removeItem("token");
      }
    } catch (error) {
      removeItem("token");
    }
    return false;
  };

  return isAuthenticated() ? (
    <Component />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <AuthRoute component={ProductsPage} />,
  },
]);
