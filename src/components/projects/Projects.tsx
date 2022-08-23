import { FC, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { projects } from "constants/Constants";

import Project from "components/project";
import { IProjectProps } from "components/project/Project";
import HomeSection from "components/_shared/homeSection";
import ProjectModal from "components/projectModal";
import Grid from "@mui/material/Grid";

import { HomeSections } from "constants/Constants";

interface IProjectsProps {}

const Projects: FC<IProjectsProps> = ({}) => {
  const modalRef: any = useRef(null);

  const [openedProject, setOpenedProject] = useState<IProjectProps | null>(
    null
  );

  const handleClickProject = (project: IProjectProps) => {
    setOpenedProject(project);
    modalRef?.current.open();
  };

  return (
    <HomeSection id={HomeSections.PROJECTS}>
      <Container>
        <Header variant="h3">Header 3</Header>
        <Grid container spacing={1}>
          {projects.map((project) => (
            <Grid
              item
              key={project.title}
              onClick={() => handleClickProject(project)}
              xs={6}
              sm={4}
              md={3}
            >
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
        {openedProject && (
          <ProjectModal project={openedProject} modalRef={modalRef} />
        )}
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
