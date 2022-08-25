import LogoGraviton from "@app/assets/images/logo-graviton.png";
import LogoUniverse from "@app/assets/images/logo-universe.png";
import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const PartnersSection = () => {
  const [partners] = useState([
    {
      logo: LogoUniverse,
      h: "52px",
    },
    {
      logo: LogoGraviton,
      h: "52px",
    },
  ]);

  return (
    <Box
      padding={"88px 0 100px"}
      textAlign={"center"}
      sx={{
        pos: "relative",
        _before: {
          bg: "linear-gradient(45deg, #F34078 0%, #FB884D 100%)",
          borderRadius: "50%",
          filter: "blur(70px)",
          opacity: 0.6,
          pos: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
          // filter: 'blur(160px)',
          content: '""',
          w: "648px",
          h: "106px",
        },
      }}
      id="partnersSection"
    >
      <Heading fontSize={"40px"} mb={"16px"}>
        Our Partners
      </Heading>
      <Text fontSize={"18px"} mb={"56px"}>
        Metaversian Republic gets by with a little help from our friends:
      </Text>
      <SimpleGrid columns={partners.length} spacing={"48px"}>
        {partners.map((p, i) => (
          <Center
            key={i}
            sx={{
              background: "rgba(255, 251, 243, 0.08)",
              boxShadow:
                "0px 8px 32px rgba(35, 19, 27, 0.16), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(16px)",
              borderRadius: "16px",
              cursor: "pointer",
              padding: "46px",
            }}
            onClick={() =>
              i === 0
                ? window.open("https://www.universe.xyz/")
                : window.open("https://www.graviton.xyz/")
            }
          >
            <Image src={p.logo} h={p.h} />
          </Center>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnersSection;
