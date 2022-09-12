import PolymorphBlur1 from "@app/assets/images/polymorph-blur-1.png";
import PolymorphBlur2 from "@app/assets/images/polymorph-blur-2.png";
import Polymorph from "@app/assets/images/polymorph.png";
import {Box, Button, Container, HStack, Image, Text} from "@chakra-ui/react";
import * as s from "../../pages/home-page/HomePage.styles";
import classes from "./PolymorphSection.module.scss";

const PolymorphsSection = () => {
  return (
    <div className={classes["container"]} id="polymorphsSection">
      <Container>
        <div className={`${classes["grid"]} ${classes["polymorph"]}`}>
          <div className={classes["image-column"]}>
            <div className={classes["image-container"]}>
              <Image src={Polymorph} margin={0} alt="" />
            </div>
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
            <Image
              src={PolymorphBlur1}
              sx={{
                boxSize: "160px",
                pos: "absolute",
                left: "-24px",
                top: "-24px",
                zIndex: -1,
              }}
              alt=""
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
              alt=""
            />
          </div>
          <div className={classes["info-column"]}>
            <Text
              {...s.UniverseDropSubTitle}
            >{`Polymorphs didn't see this coming!`}</Text>
            <div className={classes["info-title"]}>Polymorphs</div>
            <div className={classes["info-body"]}>
              {`They got more than what they bargained for when they volunteered for the "bleisure" (business-leisure) trip to explore Metaversia. Only the very skilled and expert Polymorphs were chosen for this expedition as they tough it out on the most challenging mission they've ever been on. Many arrived in Metaversia, but only a few will get out.`}
            </div>
            <HStack spacing={"16px"}>
              {/* <Button>View on Marketplace</Button> */}
              <Button
                variant={"ghost"}
                onClick={() => {
                  window.open("https://polymorphs.universe.xyz/");
                }}
              >
                Learn More
              </Button>
            </HStack>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PolymorphsSection;
