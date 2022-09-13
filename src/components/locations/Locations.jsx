import { useState } from "react";
import Map from "@app/assets/images/map.png";
import { Button, Container, Image } from "@chakra-ui/react";
import Popup from "reactjs-popup";
import classes from "./Locations.module.scss";
import LocationsPopup from "@app/components/popups/LocationsPopup";

const Locations = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <Container id="locationsSection" textAlign={"center"}>
      <div className={classes["heading"]}>Locations</div>
      <Image src={Map} alt="" />
      <Button onClick={() => setOpenPopup(!openPopup)} sx={{ zIndex: 999 }}>Locations</Button>
      <Popup open={openPopup}>
        {(close) => (
          <LocationsPopup
            close={() => {
              setOpenPopup(false);
              close();
            }}
          />
        )}
      </Popup>
    </Container>
  );
};

export default Locations;
