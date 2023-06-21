import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "../components/sections/projects";
import NotFoundPage from "./404";
import Resume from "./resume";
import "../styles/main.scss";
import Hero from "../components/sections/hero";
import Layout from "./layout";

// markup
const IndexPage = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/code" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default IndexPage;
