import React  from "react";
import { Box, Flex, Text, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import location6 from "@app/assets/images/locations/location-6.jpg";
import location62 from "@app/assets/images/locations/location-6-2.jpg";

const Location6 = () => {
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <Flex gap={8} flexDir={{ md: "row", base: "column"}}>
      <Box flex={1} alignSelf={"center"}>
        <img
          src={tabIndex === 0 ? location6 : location62}
          alt="Location"
        />
      </Box>
      <Box flex={1.5}>
        <Text as={"h2"} className={"custom-popup__title"}>Space Station</Text>
        <Tabs colorScheme={"black"} onChange={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Outdoor</Tab>
            <Tab>Indoor</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  The Space Station is located in the northernmost part of Metaversia with a launchpad for a rocket ship and a runway for an aircraft to take off and descend from. There is even a large satellite attached to a giant hangar and state-of-the-art warehouse. The satellite dish allows the  Polymorphs to get back into contact with the P.E.E.P.E.E. In the surrounding areas, white sand and rock cliffs cover the rest of the surfaces. Palm trees and foliage make the Space Station look like a tropical resort.
                </Text>
              </Box>
            </TabPanel>
            <TabPanel p={"20px 0"}>
              <Box className={"custom-popup__text-wrapper"}>
                <Text>
                  The inside of the Space Station is much bigger than it seems from the outside as large part of the hangar and warehouse is underground. The ample space inside is anything but empty with multiple airships strewn around as well as high-tech equipment, robot hands, and automated stations. There are living quarters inside the Space Station, making it an ideal space for the Polymorphs and Deviants to occupy as their secondary base.
                </Text>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Location6;
