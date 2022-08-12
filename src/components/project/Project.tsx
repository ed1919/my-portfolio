import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectLabel from "components/projectLabel";
import { IProjectLabelProps } from "components/projectLabel/ProjectLabel";

export interface IProjectProps {
  imgUrl: string;
  title: string;
  description: string;
  labels: IProjectLabelProps[];
}

const Project: FC<IProjectProps> = ({ imgUrl, title, description, labels }) => {
  return (
    <Container>
      <MainImage src={imgUrl} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <LabelsWrapper>
        {labels.map((item) => (
          <ProjectLabel {...item} />
        ))}
      </LabelsWrapper>
    </Container>
  );
};

export default Project;

const Container = styled(Box)(({ theme }) => ({
  flex: '0 0 24%',
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  border: "1px solid black",
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    opacity: 0.5,
    cursor: 'pointer',
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
