import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";


export const userContext = createContext();

const AuthContext = ({children}) => { 
  //  const [authTokens, setAuthTokens] = useState(() =>
  //       localStorage.getItem("authTokens")
  //         ? JSON.parse(localStorage.getItem("authTokens"))
  //         : null
  //     );      

   
  //  const loginUser = async (email, password) => {
  //    const response = await fetch("http://127.0.0.1:8000/api/login", {
  //      method: "POST",
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      body: JSON.stringify({
  //        email,
  //        password,
  //      }),
  //    });
  //    const data = await response.json();
  //    console.log(data);

  //    if (response.status === 200) {
  //      console.log("Logged In");
  //      setAuthTokens(data);
  //      setUser(jwt_decode(data.access));
  //      localStorage.setItem("authTokens", JSON.stringify(data));
  //      history.push("/");
  //      swal.fire({
  //        title: "Login Successful",
  //        icon: "success",
  //        toast: true,
  //        timer: 6000,
  //        position: "top-right",
  //        timerProgressBar: true,
  //        showConfirmButton: false,
  //        showCancelButton: true,
  //      });
  //    } else {
  //      console.log(response.status);
  //      console.log("there was a server issue");
  //      swal.fire({
  //        title: "Username or passowrd does not exists",
  //        icon: "error",
  //        toast: true,
  //        timer: 6000,
  //        position: "top-right",
  //        timerProgressBar: true,
  //        showConfirmButton: false,
  //        showCancelButton: true,
  //      });
  //    }
  //  };

   const [user, setUser] = useState(null)

    // const [user, setUser] = useState(() =>
    //   localStorage.getItem("authTokens")
    //     ? jwt_decode(localStorage.getItem("authTokens"))
    //     : null
    // );

    // const contextData = {
    //   user,
    //   setUser,
    //   authTokens,
    //   setAuthTokens,
    //   registerUser,
    //   loginUser,
    //   logoutUser,
    // };

  return (
    <userContext.Provider value={{user,setUser}}>
<Outlet/>
    </userContext.Provider>
  );
};

export default AuthContext;
