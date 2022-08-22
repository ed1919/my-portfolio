import { FC } from "react";
import { Box } from "@mui/material";
import Header from "layout/header";
import Footer from "layout/footer";

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default MainLayout;
