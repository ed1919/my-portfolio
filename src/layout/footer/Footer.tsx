import { FC } from "react";
import { Box, Divider, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

import THEME from "theme";
import { HomeSections } from "constants/Constants";
import HomeSection from "components/_shared/homeSection";

interface IFooterProps {}

interface IButtonProps {
  label: string;
  href: string;
}

const buttons: IButtonProps[] = [
  {
    label: "about",
    href: HomeSections.ABOUT,
  },
  {
    label: "introduction",
    href: HomeSections.INTRODUCTION,
  },
  {
    label: "projects",
    href: HomeSections.PROJECTS,
  },
  {
    label: "contact",
    href: HomeSections.CONTACT,
  },
];

const Footer: FC<IFooterProps> = () => {
  return (
    <HomeSection>
      <ContainerBox>
        <IconGithubBox>
          <IconButton>
            <GitHubIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </IconGithubBox>
        <Divider />
        <ButtonsWrapperBox>
          {buttons &&
            buttons.map((button) => (
              <ButtonBox href={`#${button.href}`}>{button.label}</ButtonBox>
            ))}
        </ButtonsWrapperBox>
        <Divider />
        <CopyRightBox>Copyright © 2022 I am a User.</CopyRightBox>
      </ContainerBox>
    </HomeSection>
  );
};

export default Footer;

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  backgroundColor: THEME.colors.orange,
  padding: theme.spacing(2),
  paddingLeft: "5%",
  paddingRight: "5%",
}));

const ButtonsWrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
}));

const ButtonBox = styled("a")(({ theme }) => ({
  fontSize: 12,
  textTransform: "uppercase",
  color: THEME.colors.black,
  textDecoration: "none",

  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
}));

const IconGithubBox = styled(Box)({
  textAlign: "center",
});

const CopyRightBox = styled(Box)({
  textAlign: "center",
  fontSize: 12,
});
