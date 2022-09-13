import React  from "react";
import { Box, Flex, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import location3 from "@app/assets/images/locations/location-3.jpg";

const Location3 = () => {
  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={location3}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Carnival</Text>
        <Tabs colorScheme={"black"}>
          <TabList>
            <Tab>Outdoor</Tab>
            <Tab>Indoor</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  A dilapidated Carnival with semi-functioning rides and games, the Carnival is the perfect setting for the Deviants to blow off some steam and play during the day. There are rollercoasters, merry-go-rounds, and many more; there is even a Ferris wheel to enjoy. At the center of the Carnival is a giant circus tent where the Deviants stay to rest.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  Carnivals get a lot of action outside with their rides, games, and food vendors. But, what’s more, surprising is the excitement on the inside of one of its main events, the Carnival tent. There are cages, trampolines, food carts, various props for the shows, a spectator stand, and in the very middle, a giant safety net that looks like a lot of fun to fall into. It’s a perfect space for the Deviants to wreak havoc.
                </Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Location3;
