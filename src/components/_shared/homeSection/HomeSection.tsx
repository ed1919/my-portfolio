import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IHomeSectionProps {
  children: JSX.Element;
}

const HomeSection: FC<IHomeSectionProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default HomeSection;

const Container = styled(Box)({
  boxSizing: "border-box",
  // backgroundColor: "blue",
});
