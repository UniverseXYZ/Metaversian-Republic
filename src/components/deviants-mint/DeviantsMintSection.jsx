import InfoIcon from '@app/assets/icons/info.svg';
import BodyIcon from '@app/assets/images/body.png';
import HeadIcon from '@app/assets/images/head.png';
import { AmountSelector, Progress } from '@app/components';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image, Link, Text,
  VStack
} from '@chakra-ui/react';
import { useMemo } from 'react';

const MINT_PRICE = 0.0666;
const MAX_MINT_AMOUNT = 10000;

const DeviantsMintSection = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const mintTotalPrice = useMemo(() => {
    return +(mintAmount * MINT_PRICE).toFixed(4);
  }, [mintAmount]);

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
            <Heading color={'white'} fontSize={'32px'} textAlign={'center'} mb={'40px'}>Mint a Deviant</Heading>

            <AmountSelector
              min={1}
              value={mintAmount}
              onChange={(value) => setMintAmount(value)}
            />

            <Button size={'lg'} my={'32px'} w={'100%'}>Mint for {mintTotalPrice} ETH</Button>

            <HStack spacing={'6px'} color={'white'} justifyContent={'center'} mb={'40px'}>
              <Image src={InfoIcon} />
              <Link>Learn more about Deviants</Link>
            </HStack>

            <Progress value={minted} max={MAX_MINT_AMOUNT} sx={{
              w: 'calc(100% - 8px)',
              pos: 'absolute',
              bottom: '4px',
              left: '4px',
            }}>
              <Text fontSize={'12px'} fontWeight={'bold'} textAlign={'center'}>
                {minted}/{MAX_MINT_AMOUNT} minted
              </Text>
            </Progress>
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
    </Container>
  )
}

export default DeviantsMintSection;