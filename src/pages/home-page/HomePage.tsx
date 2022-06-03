import { Box, Button, Container, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

import IntroBG1 from '@app/assets/images/intro-bg-1.png';
import Logo from '@app/assets/images/Logo.svg';
import BookCover from '@app/assets/images/book-cover.png';
import BookTestPage from '@app/assets/images/book-test-page.png';
import Map from '@app/assets/images/map.png';
import CloudsFront from '@app/assets/images/clouds-front.png';
import CloudsBack from '@app/assets/images/clouds-back.png';
import InfoIcon from '@app/assets/icons/info.svg';
import PlusIcon from '@app/assets/icons/plus.svg';
import MinusIcon from '@app/assets/icons/minus.svg';
import HeadIcon from '@app/assets/images/head.png';
import BodyIcon from '@app/assets/images/body.png';

import * as s from './HomePage.styles';

export const HomePage: NextPage = () => {
  const [header] = useState([
    'Story',
    'Locations',
    'Deviants',
    'Polymorphs',
    'Lobby Lobsters',
    'Partners',
  ]);

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
        <Box as={'header'} sx={{
          alignItems: 'center',
          bg: 'rgba(28, 5, 49, 0.1)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '23px 24px',
          zIndex: 1,
        }}>
          <Image src={Logo} alt={'Logo'} h={'32px'} w={'164px'} />
          <HStack spacing={'40px'}>
            {header.map((link, i) => (
              <Link key={i} href={'#'} sx={{
                color: 'white',
              }}>{link}</Link>
            ))}
          </HStack>
          <Box>
            <Button {...s.ConnectWallet}>Connect Wallet</Button>
          </Box>
        </Box>
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

                <HStack sx={{
                  bg: 'rgba(28, 5, 49, 0.16)',
                  borderRadius: '100px',
                  padding: '4px',
                }}>
                  <Button {...s.CountButton} disabled={true}>
                    <Image src={MinusIcon} boxSize={'20px'} />
                  </Button>
                  <Box flex={1} fontSize={'18px'} fontWeight={'bold'} textAlign={'center'}>1</Box>
                  <Button {...s.CountButton}>
                    <Image src={PlusIcon} boxSize={'20px'} />
                  </Button>
                </HStack>

                <Button {...s.MintButton} my={'32px'}>Mint for 0.0666 ETH</Button>

                <HStack spacing={'6px'} color={'white'} justifyContent={'center'} mb={'40px'}>
                  <Image src={InfoIcon} />
                  <Link>Learn more about Deviants</Link>
                </HStack>

                <Box sx={{
                  background: 'rgba(28, 5, 49, 0.16)',
                  boxShadow: 'inset 2px 2px 4px rgba(35, 19, 27, 0.05)',
                  borderRadius: '100px',
                  w: 'calc(100% - 8px)',
                  pos: 'absolute',
                  bottom: '4px',
                  left: '4px',
                  padding: '4px',
                }}>
                  <Box sx={{
                    alignItems: 'center',
                    background: 'linear-gradient(45deg, #6C42E3 0%, #01AEE9 100%)',
                    backgroundOrigin: 'border-box',
                    border: '1px solid rgba(255, 251, 243, 0.1)',
                    boxShadow: '0px 0px 16px rgba(35, 19, 27, 0.4), inset 0px 0px 8px rgba(255, 255, 255, 0.4)',
                    borderRadius: '100px 0 0 100px',
                    display: 'flex',
                    h: '28px',
                    justifyContent: 'center',
                    w: '70%',
                  }}>
                    <Text fontSize={'12px'} fontWeight={'bold'}>3520/10000 minted</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </HStack>

          <Image src={BodyIcon} sx={{
            pos: 'absolute',
            boxSize: '670px',
            top: '0',
            right: '136px',
            zIndex: -1,
          }} />
          <Image src={HeadIcon} sx={{
            pos: 'absolute',
            boxSize: '670px',
            top: '0',
            right: '136px',
            zIndex: 0,
          }} />
        </Container>
      </Box>

      <Box sx={{
        bg: 'linear-gradient(180deg, #1C0531 20.83%, #A4B4DE 66.15%, #A4CCDE 97.92%, #1C0531 100%)',
        h: '1700px',
      }}>
        <Container>
          <Box sx={{
            pos: 'relative',
            mb: '210px',
          }}>
            <Image src={BookCover} />
            <Box sx={{
              bg: `url(${BookTestPage}) center / cover`,
              pos: 'absolute',
              boxSize: '100%',
              top: '0',
              left: '0',
            }}>
            </Box>
          </Box>
        </Container>

        <Box sx={{
          pos: 'relative',
          zIndex: 0,
        }}>
          <Container>
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
      </Box>
    </>
  );
}

