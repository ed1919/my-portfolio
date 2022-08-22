import { FC } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import HomeSection from "components/_shared/homeSection";
import { MOCK_MEDIUM_TEXT, MOCK_LONG_TEXT } from "constants/Constants";
import ContactForm from "./contactForm";
import { HomeSections } from "constants/Constants";

interface IContactProps {}

const Contact: FC<IContactProps> = () => {
  return (
    <HomeSection id={HomeSections.PROJECTS}>
      <ContainerBox>
        <ContentBox>
          <TitleBox>Title</TitleBox>
          <ParagraphBox>{MOCK_MEDIUM_TEXT}</ParagraphBox>
          <ParagraphBox>{MOCK_LONG_TEXT}</ParagraphBox>
        </ContentBox>
        <ContactFormBox>
          <ContactForm />
        </ContactFormBox>
      </ContainerBox>
    </HomeSection>
  );
};

export default Contact;

const ContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  backgroundColor: "green",
  padding: theme.spacing(2),
  paddingLeft: "5%",
  paddingRight: "5%",
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  height: "100%",
}));

const ContactFormBox = styled(Box)(({ theme }) => ({
  flex: 2,
  height: "100%",
}));

const TitleBox = styled(Box)(({ theme }) => ({}));

const ParagraphBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));
