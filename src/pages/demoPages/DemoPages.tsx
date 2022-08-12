import About from "components/about";
import MainLayout from "layout/MainLayout";
import Introduction from "components/introduction";
import Projects from "components/projects";
import { FC } from "react";

interface IDemoPagesProps {}

const DemoPages: FC<IDemoPagesProps> = ({}) => {
  return (
    <div className="demoPages">
      <MainLayout>
        <>
          <About />
          <Introduction />
          <Projects />
        </>
      </MainLayout>
    </div>
  );
};

export default DemoPages;
