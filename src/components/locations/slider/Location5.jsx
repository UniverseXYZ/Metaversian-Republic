import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location5 from "@app/assets/images/locations/location-5.jpg";

const Location5 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location5}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Southern Fried Race Tracks</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The Southern Fried Race Track is a 3-mile dirt-filled track with extreme terrain changes, turns, obstacles, and tricky ramps. Safety is not a priority at the Southern Fried Race Tracks as there are minimal rails that separate the tracks from the spectator stands. Broken-down karts and wheels are abundant on the tracks, and parts and cones create obstacles within the track itself. There are a few tumbleweeds and plants around, but the general setting of the race tracks is a desert between the hills.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location5;
