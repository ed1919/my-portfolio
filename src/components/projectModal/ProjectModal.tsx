import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SharedModal from "components/_shared/sharedModal";
import { IProjectProps } from "components/project/Project";
import SharedImage from "components/_shared/sharedImage";
import { getTechniquesLabel } from "utils";
import TechniquesLabel from "components/techniquesLabel";

interface IProjectModalProps {
  project: IProjectProps;
  modalRef: any;
}

const imgStyle = {
  width: "100%",
  height: "50%",
  objectFit: "contain",
  paddingBottom: 24,
};

const ProjectModal: FC<IProjectModalProps> = ({ modalRef, project }) => {
  const { imgUrl, title, description, labelKeys } = project || {};
  return (
    <SharedModal ref={modalRef}>
      <ProjectModalBox>
        <SharedImage src={imgUrl} style={imgStyle} />
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
  alignItems: "center",
  minWidth: "60%",
  minHeight: "75%",
  padding: 24,
  border: "1px solid red",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
}));

const RowWrapperBox = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));

const DescriptionTypography = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

const TechniquesLabelsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(1),
}));
