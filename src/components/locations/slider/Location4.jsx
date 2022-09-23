import React  from "react";
import { Box, Flex, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import location4 from "@app/assets/images/locations/location-4.jpg";
import location42 from "@app/assets/images/locations/location-4-2.jpg";

const Location4 = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={tabIndex === 0 ? location4 : location42}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Bunker</Text>
        <Tabs colorScheme={"black"} onChange={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Outdoor</Tab>
            <Tab>Indoor</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  The bunkers are initially built as safe houses for the inhabitants of Metaversia. In case of any emergencies, anyone can escape to the mountains and go into hiding inside. They are built to deflect massive nuclear explosions with reinforced walls and blast doors. The outer structures look well-built, and the buildings look primarily intact despite the blast. Unfortunately for the humans that called Metaversia their home, these bunkers served them no purpose.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  The inside of the bunker looks like a war zone inside, but the Polymorphs and Deviants did not mind. There are several rooms littered with supplies, boxes, and broken furniture. It was messy, but it felt safe. The Polymorphs explored a bit upon entering the bunkers and found many levels to the bunker. They decide to use the Bunkers as their temporary base until their ship is fixed.
                </Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Location4;
