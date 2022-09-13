import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location7 from "@app/assets/images/locations/location-7.jpg";

const Location7 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location7}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Deviant Docks</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The floating wooden Deviant Docks did survive the blast because the dock is made of tough materials, but most of the pier is a mess due to the foliage that has washed ashore. There are branches and debris spread around, and the wooden dock has broken and ripped planks, making the area look dirty. The waters around the bay are serene, calm, and clear, with boats of every size moored to the wooden docks. A slope leads to the dock with many buildings in the background, looking very picturesque but eerie because they’re empty of any lifeforms.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location7;
