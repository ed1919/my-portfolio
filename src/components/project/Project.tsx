import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TechniquesLabel from "components/techniquesLabel";
import { Techniques } from "constants/Constants";

import { getTechniquesLabel } from "utils";

export interface IProjectProps {
  imgUrls: string[];
  title: string;
  description: string;
  labelKeys: Techniques[];
}

const Project: FC<IProjectProps> = ({
  imgUrls,
  title,
  description,
  labelKeys,
}) => {
  console.log("labelKeys", labelKeys);
  return (
    <Container>
      <MainImage src={imgUrls[0]} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LabelsWrapper>
        {labelKeys &&
          labelKeys.map((labelKey) => {
            const labelDetails = getTechniquesLabel(labelKey);
            return (
              <TechniquesLabel key={labelDetails.label} {...labelDetails} />
            );
          })}
      </LabelsWrapper>
    </Container>
  );
};

export default Project;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  border: "1px solid black",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    opacity: 0.5,
    cursor: "pointer",
  },
}));

const MainImage = styled("img")({
  objectFit: "cover",
});

const Title = styled(Typography)({});

const Description = styled(Typography)({});

const LabelsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 4,
}));
