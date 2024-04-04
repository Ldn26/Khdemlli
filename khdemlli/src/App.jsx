import { createBrowserRouter } from "react-router-dom";
import Landing from "./routes/Landing";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./routes/Login";
import OurTeam from "./routes/OurTeam";
import SignUp from "./routes/SignUp";
import WorkerDashboard from "./routes/WorkerDashboard";
import ClientDashboard from "./routes/ClientDashboard";
import InboxWorker from "./components/Dashboards/WorkerDashboard/InboxWorker" 
import NotificationWorker from "./components/Dashboards/WorkerDashboard/NotificationWorker"
import EditProfileWorker from "./components/Dashboards/WorkerDashboard/EditProfileWorker";
import Settings from "./components/Dashboards/WorkerDashboard/Settings";
import ServicesPage from "./routes/ServicesPage";


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
    element: (
      <QueryClientProvider client={queryClient}>
        <About />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/ourteam",
    element: <OurTeam/>,
  },
  {
    path: "",
    element: <AuthContext />,
    children: [
      {
        path: "workerDash",
        element: (
          <ProtectedRoute>
            <QueryClientProvider client={queryClient}>
              <WorkerDashboard />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "inboxw",
            element: <InboxWorker />,
          },
          {
            path: "notificationw",
            element: <NotificationWorker />,
          },
          {
            path: "profilew",
            element: <EditProfileWorker />,
          },
          {
            path: "settingsw",
            element: <Settings />,
          },
        ],
      },
      {
        path: "clientDash",
        element: (
          <ProtectedRoute>
            <ClientDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default routes;
