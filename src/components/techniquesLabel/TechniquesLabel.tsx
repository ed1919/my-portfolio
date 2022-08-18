import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface ITechniquesLabelProps {
  label: string;
  value: string;
  themeColor: string;
}

const TechniquesLabel: FC<ITechniquesLabelProps> = ({
  label,
  value,
  themeColor,
}) => {
  return (
    <ContainerBox
      sx={{
        backgroundColor: themeColor,
      }}
    >
      {label}
    </ContainerBox>
  );
};

export default TechniquesLabel;

const ContainerBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: "4px 8px",
  height: "100%",
}));
