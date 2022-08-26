import Map from "@app/assets/images/map.png";
import { Container, Image } from "@chakra-ui/react";
import classes from "./Locations.module.scss";

const Locations = () => {
  return (
    <Container id="locationsSection">
      <div className={classes["heading"]}>Locations</div>
      <Image src={Map} />
    </Container>
  );
};

export default Locations;
