import { useFormik } from "formik";
import {
  LoginTitle,
  LoginWrapper,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginBlock,
  LoginButton,
  LoginError,
} from "./login.style";
 const Login = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "Ali",
      last_name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {
        email: "",
        password: "",
      };

      if (!values.email) {
        errors.email = "Required";
      }
      // else if(!/^[\w-\.]+@([\M-]+\.)+[.\w-]{2,4}$/1.test(values.email)){
      //   errors.email = "Invalite email format"
      // }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
  });
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginBlock>
          <LoginLabel htmlFor="email">Email</LoginLabel>
          <LoginInput
            placeholder="Email..."
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <LoginError>{formik.errors.email}</LoginError>
          ) : (
            ""
          )}
        </LoginBlock>
        <LoginBlock>
          <LoginLabel htmlFor="password">Password</LoginLabel>
          <LoginInput
            placeholder="Password..."
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <LoginError>{formik.errors.password}</LoginError>
          ) : (
            ""
          )}
        </LoginBlock>

        <LoginButton type="submit">SEND</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};
export default Login
