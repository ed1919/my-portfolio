import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Project from "components/project";
import { projects } from "constants/Constants";
import HomeSection from "components/_shared/homeSection";

interface IProjectsProps {}

const Projects: FC<IProjectsProps> = ({}) => {
  return (
    <HomeSection>
      <Container>
        <Header variant="h3">Header 3</Header>
        <ProjectsWrapper>
          {projects.map((item) => (
            <Project {...item} />
          ))}
        </ProjectsWrapper>
      </Container>
    </HomeSection>
  );
};

export default Projects;

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "yellow",
  padding: theme.spacing(2),
  paddingLeft: "5%",
  paddingRight: "5%",
}));

const Header = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

const ProjectsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: theme.spacing(1),
}));
