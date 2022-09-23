import React  from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import location10 from "@app/assets/images/locations/location-10.jpg";

const Location10 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location10}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Corn Depot</Text>
        <Box className={"custom-popup__text-wrapper"}>
          <Text>
            The Corn Depot has a storefront and a warehouse in the back. There are shelves upon shelves of… you guessed it, corn! Outside the building there are old broken-down cars, golf carts, and dune buggies littered around, surrounded by cornfields. It’s junkyard heaven for the Polymorphs and the Deviants.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Location10;
