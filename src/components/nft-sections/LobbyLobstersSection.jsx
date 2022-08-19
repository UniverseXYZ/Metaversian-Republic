import Border from '@app/assets/images/border.png';
import LobsterBlur1 from '@app/assets/images/lobster-blur-1.png';
import LobsterBlur2 from '@app/assets/images/lobster-blur-2.png';
import Lobster from '@app/assets/images/lobster.png';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';
import * as s from '../../pages/home-page/HomePage.styles';

const LobbyLobstersSection = () => {
  return (
    <Container py={'128px'} id="lobbyLobstersSection">
      <HStack spacing={'48px'}>
        <Box flex={1} color={'white'}>
          <Text {...s.UniverseDropSubTitle}>{`Deities of an Underwater World`}</Text>
          <Heading {...s.UniverseDropTitle}>Lobby Lobsters</Heading>
          <Text {...s.UniverseDropText}>
            ${`How did they create an Atlantean water world right underneath Metaversia without the humans' notice? What other mysterious secrets do the Lobby Lobsters hold? To the Deviants, these Lobsters of gods to be worshipped, but where did they come from if they didn't mutate because of the blast? Or were they here all along?`}
          </Text>
          <HStack spacing={'16px'}>
            <Button>View on Marketplace</Button>
            <Button variant={'ghost'} onClick={() => { window.open('https://www.universe.xyz/lobby-lobsters') }}>Learn More</Button>
          </HStack>
        </Box>
        <Box flex={1}>
          <Box sx={{
            bg: `url(${Border}) center / cover`,
            boxSize: '400px',
            padding: '32px',
            pos: 'relative',
            m: 'auto',
            zIndex: 0,
          }}>
            <Image src={Lobster} />
            <Image src={LobsterBlur1} sx={{
              boxSize: '160px',
              pos: 'absolute',
              right: '-24px',
              top: '-24px',
              zIndex: -1,
            }} />
            <Image src={LobsterBlur2} sx={{
              boxSize: '160px',
              pos: 'absolute',
              left: '-24px',
              bottom: '-24px',
              zIndex: -1,
            }} />
            <Box sx={{
              bg: 'linear-gradient(135deg, #CD4097 0%, #5C81E4 100%)',
              filter: 'blur(50px)',
              boxSize: '148px',
              opacity: 0.3,
              pos: 'absolute',
              right: '-24px',
              bottom: '-24px',
              zIndex: -1,
            }} />
            <Box sx={{
              bg: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
              filter: 'blur(50px)',
              boxSize: '148px',
              opacity: 0.3,
              pos: 'absolute',
              left: '-24px',
              top: '-24px',
              zIndex: -1,
            }} />
          </Box>
        </Box>
      </HStack>
    </Container>
  );
};

export default LobbyLobstersSection;