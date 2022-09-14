import {
  Box, Container, HStack, Text
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';


import { useSelector } from 'react-redux';
import { useWallet } from 'utils/wallet/useWallet';
import { selectWallet, selectWalletAddress } from 'utils/wallet/wallet.slice';
import Book from '../../components/book/Book';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/carousel/Hero';
import Locations from '../../components/locations/Locations';
import LobbyLobstersSection from '../../components/nft-sections/LobbyLobstersSection';
import PolyMorphsSection from '../../components/nft-sections/PolymorphsSection';
import PartnersSection from '../../components/partners/PartnersSection';
import DeviantsInfo from '../../components/deviants-info/DeviantsInfo';
import GameSection from '../../components/zombie-game/GameSection';
import ZombieGame from '../../components/zombie-game/ZombieGame';
import classes from './Homepage.module.scss';
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
      name: 'Play',
      sectionId: '#mobileGameSection'
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
  const walletAddress = useSelector(selectWalletAddress);
  const { web3Connect, web3Disconnect } = useWallet();
  const wallet = useSelector(selectWallet);

  return (
    <>
      <Hero />
      <Box sx={{
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
          handleConnectWallet={web3Connect}
          showInstallWalletPopup={showInstallWalletPopup}
          setShowInstallWalletPopup={setShowInstallWalletPopup}
          selectedWallet={selectedWallet}
          setSelectedWallet={setSelectedWallet}
          walletAddress={walletAddress}
          header={header}
          disconnect={web3Disconnect}
          wallet={wallet}
        />
        <ZombieGame />
      </Box>
      <div className={classes['homepage-bg']}>
        <Book />
        <Box sx={{
          pos: 'relative',
          zIndex: 0,
        }}>
          <Locations />
          <div className={classes['clouds-back']} />
          <div className={classes['clouds-front']} />
        </Box>
        <DeviantsInfo />
        <GameSection handleConnectWallet={web3Connect}
          showInstallWalletPopup={showInstallWalletPopup}
          setShowInstallWalletPopup={setShowInstallWalletPopup}
          selectedWallet={selectedWallet}
          setSelectedWallet={setSelectedWallet}
          walletAddress={walletAddress}
        />
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
      </div>
    </>
  );
}
