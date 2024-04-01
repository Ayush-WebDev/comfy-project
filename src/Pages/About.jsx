import React from "react";
import { BreadCrumb, AboutUs } from "../Components";
const About = () => {
  return (
    <>
      <BreadCrumb url={"/about"} page={"About"} />
      <AboutUs />
    </>
  );
};

export default About;
