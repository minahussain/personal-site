import * as React from "react";
import "../styles/main.scss";
import Hero from "../components/sections/hero";
import Layout from "./layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
