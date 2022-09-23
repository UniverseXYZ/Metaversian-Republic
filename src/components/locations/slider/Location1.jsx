import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location1 from "@app/assets/images/locations/location-1.jpg";

const Location1 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location1}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>EnterDAO Volcano</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The mountain ranges around the island of Metaversia are beautiful and scenic. They also offer protection to the islanders from the elements. There is Corn Peak to the north and Mount Devious which flanks the south. These two mountain ranges have very different atmospheres. Corn Peaks is covered in snow, while Mount Devious is barren with terrain and rocks. The EnterDAO Volcano is situated in the southern-most part of Mount Devious. It is an active volcano that releases purple magma in many different streams down the mountain range. The lava flows towards the sea instead of the island’s center, making it a safe volcano to hike on. There is a control room bunker that the Polymorphs infiltrated for intel on a mountain peak beside the EnterDAO Volcano. The Polymorphs and Deviants will soon come across many mysteries and secrets around the EnterDAO volcano.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location1;
