import Form from "../../components/Form/Form";
import AuthLayout from "../../components/AuthLayout/AuthLayout";

function SignUp({ setAuth }) {
  return (
    <AuthLayout>
      <Form setAuth={setAuth} formType={"signup"} />
    </AuthLayout>
  );
}

export default SignUp;
