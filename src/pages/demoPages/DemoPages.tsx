import { FC, useState, useEffect } from "react";
import Header from "layout/header";
import About from "components/about";

interface IDemoPagesProps {}

const DemoPages: FC<IDemoPagesProps> = ({}) => {
  return (
    <div className="demoPages">
      <Header />
      <About />
    </div>
  );
};

export default DemoPages;
