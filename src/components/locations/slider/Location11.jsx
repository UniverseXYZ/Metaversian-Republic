import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
// TODO - update img when design is done
import location11 from "@app/assets/images/locations/location-1.jpg";

const Location11 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location11}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Horse Stable</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The Horse Stable and the land surrounding it look like a neglected part of the island that no one had gone near for ages. The outside of the horse stable looks dilapidated with shattered windows, and a broken windmill is spinning on top. Near the stable, there is an open field where a few mutated cows and horses have somehow survived the blast and are living as if nothing happened.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location11;
