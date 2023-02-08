import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContex";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
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
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      first_name: "Ali",
      last_name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(" http://localhost:7777/login", values)
        .then((data) => {
          if(data.status === 200 ){
            setToken(data.data.accessToken)
            setUser(data.data.user)
            navigate('/')
          }
        })
        .catch((err) => console.log(err));
    },
    // validate: (values) => {
    //   const errors = {
    //     email: "",
    //     password: "",
    //   };

    //   if (!values.email) {
    //     errors.email = "Required";
    //   }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)){
    //     errors.email = "Invalite email format"
    //   }
    //   if (!values.password) {
    //     errors.password = "Required";
    //   }
    //   return errors;
    // },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Requaird !!!"),
      last_name: Yup.string().required("Requaird !!!"),
      email: Yup.string()
        .email("Invalit email format")
        .required("Requaird !!!"),
      password: Yup.string()
        .min(3, "Pasword must be longer characsters ")
        .max(8, "Password must be last 8 characster")
        .required("Requaird !!!"),
    }),
  });
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={formik.handleSubmit} >
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
export default Login;
