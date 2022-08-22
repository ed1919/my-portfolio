import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IHomeSectionProps {
  id?: string;
  children: JSX.Element;
}

const HomeSection: FC<IHomeSectionProps> = ({ id, children }) => {
  return (
    <Container>
      <>
        <Anchor id={id} />
        {children}
      </>
    </Container>
  );
};

export default HomeSection;

const Container = styled(Box)({
  boxSizing: "border-box",
  // backgroundColor: "blue",
});

const Anchor = styled("a")({
  display: "block",
  position: "relative",
  top: -56,
  visibility: "hidden",
});
