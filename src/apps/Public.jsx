import { Route, Routes } from "react-router-dom";
import { PublicHeader } from "../components/PublicHeader/PublicHeader";
import Login from "../pages/Login/Login"
import { PublicHome } from "../pages/PublicHome/PublicHome";
import Register from "../pages/Register/Register";
import styled from "styled-components";
export const Public = () => {
  return (
    <PublicBox >
      <PublicHeader />
      <div className="container">
      <Routes>
        <Route path="/" element={<PublicHome /> }/>
        <Route path="/login" element={<Login /> }/>
        <Route path="/register" element={<Register /> }/>
        <Route path="*" element={ <h2>Not found</h2>}/>
      </Routes>
      </div>
    </PublicBox>
  );
};

const PublicBox = styled.div`
background-color: teal;
`
