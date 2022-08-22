import BodyIcon from '@app/assets/images/body.png';
import HeadIcon from '@app/assets/images/head.png';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Text, VStack
} from '@chakra-ui/react';
import { ethers } from 'ethers';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { selectWalletType } from 'utils/wallet/wallet.slice';
import { getCoinBaseProvider, walletConnectProvider } from 'utils/wallet/wallet.web3.providers';
import * as Web3Token from 'web3-token';
import CodePopup from "../popups/CodePopup";

const ZombieGame = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [code, setCode] = useState("");
  const walletType = useSelector(selectWalletType);

  const handleGenerateCode = async () => {
    let provider;
    if (walletType === 'Metamask') {
      provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    if (walletType === 'WalletConnect') {
      provider = new ethers.providers.Web3Provider(walletConnectProvider);
    }
    if (walletType === 'CoinBase') {
      const coinbaseWalletProvider = getCoinBaseProvider();
      provider = new ethers.providers.Web3Provider(coinbaseWalletProvider);
    }

    const signer = provider.getSigner();
    const token = await Web3Token.sign(async msg => await signer.signMessage(msg), '1d');
    const fetchResponse = await fetch('/api/getUserId', {
      headers: {
        'Authorization': token
      }
    });
    const getUserIdResponse = await fetchResponse.json();
    setOpenPopup(true);
    setCode(getUserIdResponse.code);
  }

  return (
    <Container color={'white'} pos={'relative'}>
      <HStack spacing={0} justifyContent={'space-between'} py={'132px'}>
        <VStack spacing={'32px'} alignItems={'flex-start'} flex={1}>
          <Heading fontSize={'88px'} lineHeight={'88px'}>Metaversian Republic</Heading>
          <Text>
            The Polymorphs have landed in Metaversia! As a part of a select group of experts, Polymorphs take part in a special expedition for the Polymorphic Extreme Edition of Planetary Exploration Enterprise and it is up to them to discover everything that Metaversia has to offer.
          </Text>
        </VStack>
        <Box flex={1}>
          <Box sx={{
            bg: 'rgba(255, 251, 243, 0.2)',
            backdropFilter: 'blur(24px)',
            borderRadius: '22px',
            boxShadow: 'inset 0px 0px 1px 1px rgba(255, 255, 255, 0.2)',
            padding: '48px 44px 0',
            h: '400px',
            w: '480px',
            pos: 'relative',
            zIndex: 0,
            ml: 'auto',
          }}>
            <Heading color={'white'} fontSize={'32px'} textAlign={'center'} mb={'40px'}>Play a Game</Heading>
            <Button size={'lg'} my={'32px'} w={'100%'} onClick={handleGenerateCode}>Generate code to play</Button>
          </Box>
        </Box>
      </HStack>

      <Image src={BodyIcon} sx={{
        pos: 'absolute',
        boxSize: '670px',
        top: '0',
        right: '136px',
        zIndex: -1,
        pointerEvents: 'none',
      }} />
      <Image src={HeadIcon} sx={{
        pos: 'absolute',
        boxSize: '670px',
        top: '0',
        right: '136px',
        zIndex: 0,
        pointerEvents: 'none',
      }} />
      <Popup
        open={openPopup}
      >
        {(close) => (
          < CodePopup
            close={() => {
              setOpenPopup(false);
              setCode("");
              close();
            }}
            code={code}
          />
        )}

      </Popup>
    </Container >
  );
};

export default ZombieGame;