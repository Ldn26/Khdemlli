import { createBrowserRouter } from "react-router-dom";
import Landing from './routes/Landing';
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/login/SigninForm"
import Home from "./Home"
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },{
    path: "",
    element : <AuthContext/>,
    children: [
   {
    path : '/login',
    element : <Login/>
   },{
    path: "",
    element : (
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>
    )
   }
    ]
  }
 

]);
export default routes;