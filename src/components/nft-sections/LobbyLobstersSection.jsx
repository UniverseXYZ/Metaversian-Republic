import LobsterBlur1 from "@app/assets/images/lobster-blur-1.png";
import LobsterBlur2 from "@app/assets/images/lobster-blur-2.png";
import Lobster from "@app/assets/images/lobster.png";
import {Box, Button, Container, HStack, Image, Text} from "@chakra-ui/react";
import * as s from "../../pages/home-page/HomePage.styles";
import classes from "./PolymorphSection.module.scss";

const LobbyLobstersSection = () => {
  return (
    <div className={classes["container"]} id="lobbyLobstersSection">
      <Container>
        <div className={classes["grid"]}>
          <div className={classes["info-column"]}>
            <Text
              {...s.UniverseDropSubTitle}
            >{`Deities of an Underwater World`}</Text>
            <div className={classes["info-title"]}>Lobby Lobsters</div>
            <div className={classes["info-body"]}>
              {`How did they create an Atlantean water world right underneath Metaversia without the humans' notice? What other mysterious secrets do the Lobby Lobsters hold? To the Deviants, these Lobsters of gods to be worshipped, but where did they come from if they didn't mutate because of the blast? Or were they here all along?`}
            </div>
            <HStack spacing={"16px"}>
              {/* <Button>View on Marketplace</Button> */}
              <Button
                variant={"ghost"}
                onClick={() => {
                  window.open("https://www.universe.xyz/lobby-lobsters");
                }}
              >
                Learn More
              </Button>
            </HStack>
          </div>
          <div className={classes["image-column"]}>
            <div className={classes["image-container"]}>
              <Image src={Lobster} alt="" />
            </div>

            <Image
              src={LobsterBlur1}
              sx={{
                boxSize: "160px",
                pos: "absolute",
                right: "-24px",
                top: "-24px",
                zIndex: -1,
              }}
              alt=""
            />
            <Image
              src={LobsterBlur2}
              sx={{
                boxSize: "160px",
                pos: "absolute",
                left: "-24px",
                bottom: "-24px",
                zIndex: -1,
              }}
              alt=""
            />
            <Box
              sx={{
                bg: "linear-gradient(135deg, #CD4097 0%, #5C81E4 100%)",
                filter: "blur(50px)",
                boxSize: "148px",
                opacity: 0.3,
                pos: "absolute",
                right: "-24px",
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
                left: "-24px",
                top: "-24px",
                zIndex: -1,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LobbyLobstersSection;
