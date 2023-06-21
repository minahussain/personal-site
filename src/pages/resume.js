import * as React from "react";
import Navbar from "../components/menus/navbar";

const Resume = () => {
  return (
    <div>
      <Navbar />
      <object
        width={"100%"}
        height={850}
        data="https://docs.google.com/document/d/1KCqnw-USoFwCcZMXySximmaUa6vH1QZ4H1uVrfVCr0c/"
        type="application/pdf"
      >
        <p>resume</p>
      </object>
    </div>
  );
};

export default Resume;
