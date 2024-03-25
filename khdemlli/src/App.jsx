import { createBrowserRouter } from "react-router-dom";
import Landing from './routes/Landing';
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/login/SigninForm"
import Home from "./Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
    path: "",
    element: <AuthContext />,
    children: [
      {
        path: "/login",
        element: <Login />,
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