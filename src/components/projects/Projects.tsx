import { FC, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { projects } from "constants/Constants";

import Project from "components/project";
import { IProjectProps } from "components/project/Project";
import HomeSection from "components/_shared/homeSection";
import ProjectModal from "components/projectModal";

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
    <HomeSection>
      <Container>
        <Header variant="h3">Header 3</Header>
        <ProjectsWrapper>
          {projects.map((item) => (
            <ProjectWrapperBox
              key={item.title}
              onClick={() => handleClickProject(item)}
            >
              <Project {...item} />
            </ProjectWrapperBox>
          ))}
        </ProjectsWrapper>
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

const ProjectsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  gap: theme.spacing(1),
}));

const ProjectWrapperBox = styled(Box)`
  width: 24%;
`;
