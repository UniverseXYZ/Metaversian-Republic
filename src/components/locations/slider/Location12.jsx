import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
// TODO - update img when design is done
import location12 from "@app/assets/images/locations/location-1.jpg";

const Location12 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location12}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Sports Field</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            Amongst the stalks of corn, a large sports field can be found. It’s not the best shape as the areas are full of bumps and debris with patches of overgrown corn or giant potholes. There are two goal posts on either end of the standard-sized football field. The goalpost itself is a frame with a net attached to the back. Attached to the top of the frame are two 18 feet tall upright steel tubing posts for American football kickoffs and a basketball hoop lazily attached to the middle. It&amp;apos;s a field for every sport!
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location12;
