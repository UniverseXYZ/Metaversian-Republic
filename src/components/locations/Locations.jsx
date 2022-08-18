import Map from '@app/assets/images/map.png';
import {
  Container,
  Heading,
  Image
} from '@chakra-ui/react';

const Locations = () => {
  return (
    <Container id='locationsSection'>
      <Heading sx={{
        color: '#FFFBF3',
        fontSize: '240px',
        pos: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0.32,
        zIndex: -1,
        top: '-60px',
      }}>Locations</Heading>
      <Image src={Map} />
    </Container>
  );
};

export default Locations;