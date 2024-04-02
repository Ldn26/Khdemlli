import Head from "../components/SignUp/Head";
import LoginForm from "../components/login/LoginForm";
import Foot from "../components/SignUp/Foot";
function Login() {
  return (
    <div>
      <Head
        content={"Sign Up"}
        question={"No Account Yet"}
        redirection={"/Signup"}
      />
      <LoginForm />
      <Foot/>
    </div>
  );
}

export default Login;
