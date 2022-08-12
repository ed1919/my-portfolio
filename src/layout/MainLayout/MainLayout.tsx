import { FC } from "react";
import { Box } from "@mui/material";
import Header from "layout/header";

interface IMainLayoutProps {
  children: JSX.Element;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  );
};

export default MainLayout;
