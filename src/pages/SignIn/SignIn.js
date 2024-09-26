import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Form from "../../components/Form/Form";

const Login = ({ setAuth }) => {
  return (
    <AuthLayout>
      <Form setAuth={setAuth} formType={"signin"} />
    </AuthLayout>
  );
};

export default Login;
