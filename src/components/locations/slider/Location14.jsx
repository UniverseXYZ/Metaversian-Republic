import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location14 from "@app/assets/images/locations/location-14.jpg";

const Location14 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location14}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Panopticon</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            Metaversia is known as a paradise resort, but there is a darker side to the island that the Polymorphs and Deviants do not know about. There is a large prison area with a central surveillance tower that keeps the island in check. It is a rundown building with broken concrete and crumbling walls. The prison is well hidden from the beautiful landscape of Metaversia - rumor has it that some prisoners are still lurking within its walls.and warehouse are attached to the Satellite, where the Polymorphs can explore separately.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location14;
