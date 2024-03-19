
import { createBrowserRouter } from "react-router-dom";

import Landing from './routes/Landing';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },

]);
export default routes;