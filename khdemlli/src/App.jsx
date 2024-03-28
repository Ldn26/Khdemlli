import { createBrowserRouter } from "react-router-dom";
import Landing from "./routes/Landing";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Services from "./routes/Services";

const queryClient = new QueryClient();
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClient}>
        <Landing />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "",
    element: <AuthContext />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default routes;
