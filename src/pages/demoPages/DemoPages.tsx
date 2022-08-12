import About from "components/about";
import MainLayout from "layout/MainLayout";
import { FC } from "react";

interface IDemoPagesProps {}

const DemoPages: FC<IDemoPagesProps> = ({}) => {
  return (
    <div className="demoPages">
      <MainLayout>
        <About />
      </MainLayout>
    </div>
  );
};

export default DemoPages;
