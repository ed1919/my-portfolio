import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface IProjectLabelProps {
  label: string;
  value: string;
  themeColor: string;
}

const ProjectLabel: FC<IProjectLabelProps> = ({ label, value, themeColor }) => {
  return (
    <Container
      sx={{
        backgroundColor: themeColor,
      }}
    >
      {label}
    </Container>
  );
};

export default ProjectLabel;

const Container = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: "4px 8px",
}));
