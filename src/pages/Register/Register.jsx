import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup"
import {AuthContext} from "../../context/AuthContext"
import {UserContext} from "../../context/UserContex"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  RegisterTitle,
  RegisterWrapper,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterBlock,
  RegisterButton,
  RegisterError,
} from "./register.style";
const Register = () => {

  const {setToken} = useContext(AuthContext);
  const {setUser} = useContext(UserContext);
const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(" http://localhost:7777/register", values)
        .then((data) => {
          if(data.status === 201 ){
            setToken(data.data.accessToken)
            setUser(data.data.user)
            navigate('/')
          }
        })
        .catch((err) => console.log(err));
    },
    // validate: (values) => {
    //   const errors = {
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    //     password: "",
    //   };
    //   if (!values.first_name) {
    //     errors.first_name = "Required";
    //   }
    //   if (!values.last_name) {
    //     errors.last_name = "Required";
    //   }
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    //     errors.email = "Invalite email format";
    //   }
    //   if (!values.password) {
    //     errors.password = "Required";
    //   }
    //   return errors;
    // },
    validationSchema : Yup.object({
      first_name: Yup.string().required('Requaird !!!'),
      last_name: Yup.string().required('Requaird !!!'),
      email: Yup.string().email("Invalit email format").required('Requaird !!!'),
      password: Yup.string().min(3 ,'Pasword must be longer characsters ').max(8, 'Password must be last 8 characster').required('Requaird !!!'),
    })
  });
  // console.log(formik.values);
  return (
    <RegisterWrapper>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm onSubmit={formik.handleSubmit}>
        <RegisterBlock>
          <RegisterLabel htmlFor="first_name">First Name</RegisterLabel>
          <RegisterInput
            placeholder="First_name..."
            type="text"
            name="first_name"
            id="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <RegisterError>{formik.errors.first_name}</RegisterError>
          ) : (
            ""
          )}
        </RegisterBlock>
        <RegisterBlock>
          <RegisterLabel htmlFor="last_name">Last Name</RegisterLabel>
          <RegisterInput
            placeholder="Last Name..."
            type="text"
            name="last_name"
            id="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <RegisterError>{formik.errors.last_name}</RegisterError>
          ) : (
            ""
          )}
        </RegisterBlock>
        <RegisterBlock>
          <RegisterLabel htmlFor="email">Email</RegisterLabel>
          <RegisterInput
            placeholder="Email..."
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <RegisterError>{formik.errors.email}</RegisterError>
          ) : (
            ""
          )}
        </RegisterBlock>
        <RegisterBlock>
          <RegisterLabel htmlFor="password">Password</RegisterLabel>
          <RegisterInput
            placeholder="Password..."
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <RegisterError>{formik.errors.password}</RegisterError>
          ) : (
            ""
          )}
        </RegisterBlock>
        <RegisterButton type="submit">SEND</RegisterButton>
      </RegisterForm>
    </RegisterWrapper>
  );
};

export default Register;
