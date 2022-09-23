import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location2 from "@app/assets/images/locations/location-2.jpg";

const Location2 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location2}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Battle Colosseum</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The giant Battle Colosseum that stands in Metaversia today is a replica of the original Colosseum in Rome. The outside of the structure did not do too well after the blast as most of the amphitheater is broken off, leaving pieces of broken travertine stone and broken statues lying around. The arena itself is the size of two football fields with a wooden floor covered by sand. There is also a hypogeum underneath the structure. It has networks of tunnels and cages to house the animals and gladiators before a fight.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location2;
