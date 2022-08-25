import DiscordIcon from "@app/assets/icons/discord.svg";
import GitHubIcon from "@app/assets/icons/github.svg";
import MediumIcon from "@app/assets/icons/medium.svg";
import TwitterIcon from "@app/assets/icons/twitter.svg";
import Logo from "@app/assets/images/Logo.svg";
import {
  Center,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

const Footer = (props) => {
  const { header } = props;
  const [socials] = useState([
    DiscordIcon,
    TwitterIcon,
    MediumIcon,
    GitHubIcon,
  ]);

  return (
    <HStack py={"56px"}>
      <HStack spacing={"48px"} w={"100%"}>
        <VStack spacing={"32px"} alignItems={"flex-start"} w={"368px"}>
          <Image src={Logo} />
          <Text color={"cream.80"}>
            The Polymorphs have landed in Metaversia!
            <br />
            As a part of a select group of experts.
          </Text>
        </VStack>
        <SimpleGrid
          columns={2}
          spacingY={"16px"}
          spacingX={"48px"}
          gridAutoFlow={"column"}
          gridTemplateRows={"repeat(3, minmax(0, 1fr))"}
        >
          {header.map((section, i) => (
            <Link
              key={i}
              href={
                i === 0
                  ? "#storySection"
                  : i === 1
                  ? "#locationsSection"
                  : i === 2
                  ? "#polymorphsSection"
                  : i === 3
                  ? "#lobbyLobstersSection"
                  : i === 4
                  ? "#partnersSection"
                  : null
              }
            >
              {section.name}
            </Link>
          ))}
        </SimpleGrid>
        <HStack spacing={"16px"} flex={1} justifyContent={"flex-end"}>
          {socials.map((icon, i) => (
            <Center
              key={i}
              sx={{
                bg: "rgba(255, 251, 243, 0.1)",
                borderRadius: "full",
                boxSize: "56px",
                cursor: "pointer",

                _hover: {
                  background:
                    "linear-gradient(45deg, #F34078 0%, #FB884D 100%)",
                  boxShadow:
                    "0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)",
                  borderRadius: "100px",
                },
              }}
            >
              <Image src={icon} />
            </Center>
          ))}
        </HStack>
      </HStack>
    </HStack>
  );
};

Footer.propTypes = {
  header: PropTypes.array.isRequired,
};

export default Footer;
