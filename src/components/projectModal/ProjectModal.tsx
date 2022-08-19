import { FC } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import SharedModal from "components/_shared/sharedModal";
import { IProjectProps } from "components/project/Project";
import { getTechniquesLabel } from "utils";
import TechniquesLabel from "components/techniquesLabel";
import IconClose from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import THEME from "theme";
import DemoSwiper from "./demoSwiper";

interface IProjectModalProps {
  project: IProjectProps;
  modalRef: any;
}

const ProjectModal: FC<IProjectModalProps> = ({ modalRef, project }) => {
  const { imgUrls, title, description, labelKeys } = project || {};

  const handleClose = () => {
    modalRef.current.close();
  };

  const handleNavToUrl = (url: string) => {
    alert("Nav to Url");
  };

  return (
    <SharedModal ref={modalRef}>
      <ProjectModalBox>
        <IconButton
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
          onClick={handleClose}
        >
          <IconClose />
        </IconButton>
        <RowWrapperBox>
          <DemoSwiper imgUrls={imgUrls} />
        </RowWrapperBox>
        <RowWrapperBox>
          <Typography variant="h4">{title}</Typography>
        </RowWrapperBox>
        <RowWrapperBox>
          <DescriptionTypography variant="body1">
            {description}
          </DescriptionTypography>
        </RowWrapperBox>
        <RowWrapperBox>
          <>
            <Typography variant="body1">@Applied Techniques:</Typography>
            <TechniquesLabelsBox>
              {labelKeys.map((labelKey) => {
                const techniquesLabel = getTechniquesLabel(labelKey);
                return (
                  <TechniquesLabel
                    key={techniquesLabel.label}
                    {...techniquesLabel}
                  />
                );
              })}
            </TechniquesLabelsBox>
          </>
        </RowWrapperBox>
        <ButtonsRowBox>
          <NavToProjectBtn onClick={() => handleNavToUrl("fakeURL")}>
            Nav to Project
          </NavToProjectBtn>
          <IconButtonsBox>
            <IconButton onClick={() => handleNavToUrl("fakeURL")}>
              <GitHubIcon />
            </IconButton>
          </IconButtonsBox>
        </ButtonsRowBox>
      </ProjectModalBox>
    </SharedModal>
  );
};

export default ProjectModal;

const ProjectModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "60%",
  minHeight: "75%",
  padding: 24,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
}));

const RowWrapperBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({}));

const TechniquesLabelsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  gap: theme.spacing(1),
}));

const ButtonsRowBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

const NavToProjectBtn = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  backgroundColor: THEME.colors.green,
}));

const IconButtonsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
}));
