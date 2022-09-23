import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
// TODO - update img when design is done
import location16 from "@app/assets/images/locations/location-1.jpg";

const Location16 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location16}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Football Field</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            On the west side of the island, cornfields are growing abundantly. Amongst the stalks of corn, a large football field can be found. It’s not in the best shape as the areas are full of bumps and debris. There are patches of grass missing or overgrown and holes in the ground, and there are also patches of partially cut stalks of corn. The spectator stands to watch the game on one side of the field and goalposts are on both ends. The posts are very peculiar as they are not your typical football goalposts. The goalpost itself is a frame standing at 24 feet by 8 feet on the bottom with a net attached to the back. Attached to the top of the frame are two 18 feet tall upright steel tubing posts for American football kickoffs. The entire field is standard-sized to allow American football and football gameplay.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location16;
