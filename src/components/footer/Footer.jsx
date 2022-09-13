import DiscordIcon from "@app/assets/icons/discord.svg";
import GitHubIcon from "@app/assets/icons/github.svg";
import MediumIcon from "@app/assets/icons/medium.svg";
import TwitterIcon from "@app/assets/icons/twitter.svg";
import Logo from "@app/assets/images/Logo.svg";
import { Center, Image, Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  const { header } = props;
  const [socials] = useState([DiscordIcon, TwitterIcon, MediumIcon, GitHubIcon]);

  return (
    <div className={classes["footer"]}>
      <div className={classes["footer-logo"]}>
        <Image src={Logo} alt="" />
        <Text color={"cream.80"}>
          The Polymorphs have landed in Metaversia!
          <br />
          As a part of a select group of experts.
        </Text>
      </div>
      <div className={classes["footer-sections"]}>
        {header.map((section, i) => (
          <div key={i}>
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
          </div>
        ))}
      </div>
      <div className={classes["footer-links"]}>
        {socials.map((icon, i) => (
          <Center
            onClick={() =>
              window.open(
                i === 0
                  ? "https://t.co/0hQWlbElpB?amp=1"
                  : i === 1
                  ? "https://twitter.com/mtvrsnrepublic"
                  : i === 2
                  ? "https://medium.com/universe-xyz"
                  : i === 3
                  ? "https://github.com/UniverseXYZ"
                  : null
              )
            }
            key={i}
            sx={{
              bg: "rgba(255, 251, 243, 0.1)",
              borderRadius: "full",
              boxSize: "56px",
              cursor: "pointer",
              _hover: {
                background: "linear-gradient(45deg, #F34078 0%, #FB884D 100%)",
                boxShadow:
                  "0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)",
                borderRadius: "100px",
              },
            }}
          >
            <Image src={icon} alt="" />
          </Center>
        ))}
      </div>
    </div>
  );
};

Footer.propTypes = {
  header: PropTypes.array.isRequired,
};

export default Footer;
