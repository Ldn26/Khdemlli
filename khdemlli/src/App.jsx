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
import InboxWorker from "./components/Dashboards/WorkerDashboard/InboxWorker";
import ServicesPage from "./routes/ServicesPage";
import ContactUsWorker from "./components/Dashboards/WorkerDashboard/ContactUsWorker";
import OurServices from "./components/Dashboards/WorkerDashboard/OurServices";
import DashWorker from "./components/Dashboards/WorkerDashboard/DashWorker";
import Workerprofile from "./components/Dashboards/ClientDashboard/request_service/Workerprofile";
import RequestServices from "./components/Dashboards/ClientDashboard/request_service/RequestServices";
import ServiceRequest from "./routes/ServiceRequest";
import ChatAppClient from "./components/Dashboards/ClientDashboard/Chat/ChatAppClient";
import ChatAppWorker from "./components/Dashboards/WorkerDashboard/Chat/ChatAppWorker";
import MessagesDetailsW from "./components/Dashboards/WorkerDashboard/Chat/MessagesDetailsW";
import MessagesDetailsC from "./components/Dashboards/ClientDashboard/Chat/MessagesDetailsC";
import SettingsC from "./components/Dashboards/ClientDashboard/SettingsC";
import SettingsW from "./components/Dashboards/WorkerDashboard/SettingsW";
import OurWorkers from "./components/Dashboards/ClientDashboard/OurWorkers";
import InboxClient from "./components/Dashboards/ClientDashboard/InboxClient";
import SocketC from "./components/Dashboards/ClientDashboard/Chat/SocketC";
import Elictrical from "./routes/Elictrical"
import House from "./routes/House"
import Maintenance from "./routes/Maintenance"
import Bulding from "./routes/Building"
import Security from "./routes/System";
import PainTing from "./routes/Painting"
import ForgetPassword from "./routes/ForgetPassword";
const queryClient = new QueryClient();
const routes = createBrowserRouter([
  // landing page
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
    path: "/electrical",
    element: (
      <QueryClientProvider client={queryClient}>
        <Elictrical />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/painting",
    element: (
      <QueryClientProvider client={queryClient}>
        <PainTing />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/house",
    element: (
      <QueryClientProvider client={queryClient}>
        <House />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/building",
    element: (
      <QueryClientProvider client={queryClient}>
        <Bulding />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/security",
    element: (
      <QueryClientProvider client={queryClient}>
        <Security />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  {
    path: "/ment",
    element: (
      <QueryClientProvider client={queryClient}>
        <Maintenance />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  //about page
  {
    path: "/about",
    element: (
      <QueryClientProvider client={queryClient}>
        <About />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  //Forget password
  {
    path: "/forgetPassword",
    element: (
      <QueryClientProvider client={queryClient}>
        <ForgetPassword />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    ),
  },
  //services page
  {
    path: "/services",
    element: <ServicesPage />,
  },
  ///contact page
  {
    path: "/contact",
    element: <Contact />,
  },

  // out team page
  {
    path: "/ourteam",
    element: (
      <QueryClientProvider client={queryClient}>
        <OurTeam />
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
        path: "/signup",
        element: <SignUp />,
      },

      //// Worker Dashboeard

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
          { path: "settingsw", element: <SettingsW /> },
          {
            index: true,
            element: <DashWorker />,
          },
          {
            path: "inboxw",
            element: <InboxWorker />,
          },
          {
            path: "chatw",
            element: <ChatAppWorker />,
          },
          {
            path: "/workerDash/chatw/:id",
            element: <MessagesDetailsW />,
          },
          {
            path: "contactusw",
            element: <ContactUsWorker />,
          },

          {
            path: "settingsw",
            element: <SettingsW />,
          },
        ],
      },

      /// client Dashboard
      {
        path: "clientDash",
        element: (
          <ProtectedRoute>
            <QueryClientProvider client={queryClient}>
              <ClientDashboard />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </ProtectedRoute>
        ),
        children: [
          {
            path: "settingsc",
            element: <SettingsC />,
          },
          {
            path: "servicesc",
            element: <OurServices />,
          },
          {
            path: "",
            element: <ServiceRequest />,
            children: [
              {
                path: "request",
                element: <RequestServices />,
              },
              {
                path: "workerprofile/:id",
                element: <Workerprofile />,
              },
            ],
          },
          {
            path: "ourworkers",
            element: <OurWorkers />,
          },
          {
            path: "inboxc",
            element: <InboxWorker />,
          },
          {
            path: "chatc",
            element: <ChatAppClient />,
          },
          {
            path: "inboxclient",
            element: <InboxClient />,
          },
          {
            path: "/clientDash/chatc/:id",
            element: <MessagesDetailsC />,
          },
          {
            path: "contactusc",
            element: <ContactUsWorker />,
          },
          {
            path: "socketC",
            element: <SocketC />,
          },

          {
            path: "settingsc",
            element: <SettingsC />,
          },
        ],
      },
    ],
  },
]);
export default routes;
