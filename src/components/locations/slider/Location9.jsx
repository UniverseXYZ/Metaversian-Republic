import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location9 from "@app/assets/images/locations/location-9.jpg";

const Location9 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location9}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Barnbridge</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            It’s a barn, but it’s also a bridge - BarnBridge is an iconic site for Metaversia. It’s a picturesque backdrop that is scenic and peaceful. Many couples love to visit BarnBridge for a picnic nearby or to look over the Metaversia river. That was all until a few tourists mysteriously vanished when they tried to cross the bridge from one side to the other. Some say, that BarnBridge has a portal to another realm.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location9;
