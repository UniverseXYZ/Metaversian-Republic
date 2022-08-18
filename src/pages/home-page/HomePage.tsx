import IntroBG1 from '@app/assets/images/intro-bg-1.png';
import {
  Box, Container, HStack, Text
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

import CloudsBack from '@app/assets/images/clouds-back.png';
import CloudsFront from '@app/assets/images/clouds-front.png';

import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Locations from '../../components/locations/Locations';
import LobbyLobstersSection from '../../components/nft-sections/LobbyLobstersSection';
import PolyMorphsSection from '../../components/nft-sections/PolymorphsSection';
import PartnersSection from '../../components/partners/PartnersSection';
import ZombieGame from '../../components/zombie-game/ZombieGame';
import * as s from './HomePage.styles';

export const HomePage: NextPage = () => {
  const [header] = useState([
    {
      name: 'Story',
      sectionId: '#storySection'
    },
    {
      name: 'Locations',
      sectionId: '#locationsSection'
    },
    {
      name: 'Polymorphs',
      sectionId: '#polymorphsSection'
    },
    {
      name: 'Lobby Lobsters',
      sectionId: '#lobbyLobstersSection'
    },

    {
      name: 'Partners',
      sectionId: '#partnersSection'
    },
  ]);

  const [showInstallWalletPopup, setShowInstallWalletPopup] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const handleConnectWallet = async (wallet: any) => {
    if (wallet === 'Metamask') {
      const address = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
        params: []
      });
      setWalletAddress(address);
      setConnected(true);
    }
  }

  return (
    <>
      <Box sx={{
        bg: `url(${IntroBG1}) center / cover no-repeat`,
        // minH: '100vh',
        minH: '900px',
        pos: 'relative',
        zIndex: 0,

        _before: {
          bg: 'linear-gradient(90deg, #1C0531 8.67%, rgba(28, 5, 49, 0) 100%)',
          content: '""',
          boxSize: '100%',
          left: 0,
          pos: 'absolute',
          top: 0,
          zIndex: -1,
        },

        _after: {
          bg: 'linear-gradient(360deg, #1C0531 0%, rgba(28, 5, 49, 0) 100%)',
          bottom: 0,
          content: '""',
          h: '292px',
          left: 0,
          pos: 'absolute',
          w: '100%',
          zIndex: -1,
        },
      }}>
        <Header
          handleConnectWallet={handleConnectWallet}
          showInstallWalletPopup={showInstallWalletPopup}
          setShowInstallWalletPopup={setShowInstallWalletPopup}
          selectedWallet={selectedWallet}
          setSelectedWallet={setSelectedWallet}
          connected={connected}
          walletAddress={walletAddress}
          header={header}
        />
        <ZombieGame />
      </Box>
      <Box sx={{
        bg: 'linear-gradient(180deg, #1C0531 20.83%, #A4B4DE 66.15%, #A4CCDE 97.92%, #1C0531 100%)',
        h: '1700px',
      }}>
        <Book />
        <Box sx={{
          pos: 'relative',
          zIndex: 0,
        }}>
          <Locations />
          <Box sx={{
            bg: `url(${CloudsBack}) center / cover`,
            pos: 'absolute',
            h: '800px',
            w: '100%',
            top: 0,
            zIndex: -1,
          }} />
          <Box sx={{
            bg: `url(${CloudsFront}) center / cover`,
            pos: 'absolute',
            h: '800px',
            w: '100%',
            bottom: '-250px',
            zIndex: 1,
          }} />
        </Box>
        <PolyMorphsSection />
        <Container>
          <Box {...s.Separator} />
        </Container>
        <LobbyLobstersSection />
        <Box as={'footer'} sx={{
          bg: '#2D1A3F',
          color: 'cream.100',
        }}>
          <Container>
            <PartnersSection />
            <Box {...s.Separator} />
            <Footer
              header={header}
            />
            <Box {...s.Separator} />
            <HStack
              spacing={0}
              color={'cream.40'}
              fontSize={'14px'}
              justifyContent={'space-between'}
              py={'15px'}
            >
              <Text>Copyright © Metavesian Republic.</Text>
              <Text>All rights reserved.</Text>
            </HStack>
          </Container>
        </Box>
      </Box>
    </>
  );
}
