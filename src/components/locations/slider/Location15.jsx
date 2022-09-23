import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location15 from "@app/assets/images/locations/location-15.jpg";

const Location15 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location15}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Lobby Lobster’s Underwater Lair</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            Deep within the depths of the sea and just beyond the underwater shipwreck, a cave leads to an above-water cavern. The cavern is not very big, but it has a cenote that is the entrance to the Lobby Lobster’s Underwater Lair. An entire civilization is built underneath the Metaversia island with structures, buildings, and an otherworldly ecosystem that exists separately from the land above. Luminescent plants surround the Lair and light up the surreal and ethereal main temple in the middle.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location15;
