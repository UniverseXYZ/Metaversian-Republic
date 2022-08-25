import Border from "@app/assets/images/border.png";
import PolymorphBlur1 from "@app/assets/images/polymorph-blur-1.png";
import PolymorphBlur2 from "@app/assets/images/polymorph-blur-2.png";
import Polymorph from "@app/assets/images/polymorph.png";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import * as s from "../../pages/home-page/HomePage.styles";

const PolymorphsSection = () => {
  return (
    <Container py={"128px"} id="polymorphsSection">
      <HStack spacing={"48px"}>
        <Box flex={1}>
          <Box
            sx={{
              bg: `url(${Border}) center / cover`,
              boxSize: "400px",
              padding: "32px",
              pos: "relative",
              m: "auto",
              zIndex: 0,
            }}
          >
            <Image src={Polymorph} />
            <Image
              src={PolymorphBlur1}
              sx={{
                boxSize: "160px",
                pos: "absolute",
                left: "-24px",
                top: "-24px",
                zIndex: -1,
              }}
            />
            <Image
              src={PolymorphBlur2}
              sx={{
                boxSize: "160px",
                pos: "absolute",
                right: "-24px",
                bottom: "-24px",
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                bg: "linear-gradient(135deg, #CD4097 0%, #5C81E4 100%)",
                filter: "blur(50px)",
                boxSize: "148px",
                opacity: 0.3,
                pos: "absolute",
                left: "-24px",
                bottom: "-24px",
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                bg: "linear-gradient(45deg, #F34078 0%, #FB884D 100%)",
                filter: "blur(50px)",
                boxSize: "148px",
                opacity: 0.3,
                pos: "absolute",
                right: "-24px",
                top: "-24px",
                zIndex: -1,
              }}
            />
          </Box>
        </Box>
        <Box flex={1} color={"white"}>
          <Text
            {...s.UniverseDropSubTitle}
          >{`Polymorphs didn't see this coming!`}</Text>
          <Heading {...s.UniverseDropTitle}>Polymorphs</Heading>
          <Text {...s.UniverseDropText}>
            $
            {`They got more than what they bargained for when they volunteered for the "bleisure" (business-leisure) trip to explore Metaversia. Only the very skilled and expert Polymorphs were chosen for this expedition as they tough it out on the most challenging mission they've ever been on. Many arrived in Metaversia, but only a few will get out.`}
          </Text>
          <HStack spacing={"16px"}>
            <Button>View on Marketplace</Button>
            <Button
              variant={"ghost"}
              onClick={() => {
                window.open("https://polymorphs.universe.xyz/");
              }}
            >
              Learn More
            </Button>
          </HStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default PolymorphsSection;
