import React from "react";
import Header from "./Header";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Port.scss";
import Landing from "../modules/Landing";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" />} />
        <Route path="/portfolio" element={<Landing />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
