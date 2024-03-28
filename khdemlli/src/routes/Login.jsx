import Head from "../components/SignUp/Head";
import LoginForm from "../components/login/LoginForm";
function Login() {
  return (
    <div>
      <Head
        content={"Sign Up"}
        question={"No Account Yet"}
        redirection={"/Signup"}
      />
      <LoginForm />
    </div>
  );
}

export default Login;
