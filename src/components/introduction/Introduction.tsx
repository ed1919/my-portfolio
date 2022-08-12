import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HERO_IMG_URL } from "../../constants";

import HomeSection from "components/_shared/homeSection";

interface IIntroductionProps {}

const Introduction: FC<IIntroductionProps> = ({}) => {
  return (
    <HomeSection>
      <Container>
        <Content>
          <Header variant="h3">I am Header</Header>
          <Paragraph1 variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            officia doloribus voluptas ducimus tempora non unde quibusdam
            reiciendis, impedit minus!
          </Paragraph1>
          <Paragraph2 variant="body1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            quidem labore voluptas, perferendis corrupti suscipit nihil vel
            aperiam aut quia dolorem fugit voluptatem ab impedit doloremque?
            Saepe facere similique perferendis.
          </Paragraph2>
        </Content>
        <HeroImgWrapper>
          <HeroImg src={HERO_IMG_URL} />
        </HeroImgWrapper>
      </Container>
    </HomeSection>
  );
};

export default Introduction;

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  backgroundColor: "blue",
  padding: theme.spacing(2),
  paddingLeft: "5%",
  paddingRight: "5%",
}));

const HeroImgWrapper = styled(Box)({
  flex: 4,
});

const HeroImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Content = styled(Box)(({ theme }) => ({
  flex: 8,
}));

const Header = styled(Typography)(({ theme }) => ({
  flex: 8,
  paddingBottom: theme.spacing(1),
}));

const Paragraph1 = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(1),
}));

const Paragraph2 = styled(Typography)(({ theme }) => ({}));
