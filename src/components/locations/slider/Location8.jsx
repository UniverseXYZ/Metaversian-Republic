import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location8 from "@app/assets/images/locations/location-8.jpg";

const Location8 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location8}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Polymorph Shrine</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The Polymorph Shrine is situated beside a beautiful river that runs through Metaversia. It is well hidden by lush greens and billowing tree-tops with a backdrop cascading waterfalls and rock formations. On one side of the glistening river, there is a massive shrine of the Clown Charles on top of a small hill. While on the other side, there is an old sacred tree with talismans hanging from its branches, a perfect location to meditate and pray.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location8;
