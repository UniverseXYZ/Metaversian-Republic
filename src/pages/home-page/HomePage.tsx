import {
  Accordion, AccordionButton, AccordionIcon,
  AccordionItem, AccordionPanel,
  Box,
  Button, Center,
  Container,
  Heading,
  HStack,
  Image,
  Link, SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useMemo, useState } from 'react';


import HeadIcon from '@app/assets/images/head.png';
import BodyIcon from '@app/assets/images/body.png';
import IntroBG1 from '@app/assets/images/intro-bg-1.png';
import Logo from '@app/assets/images/Logo.svg';
import BookCover from '@app/assets/images/book-cover.png';
import BookTestPage from '@app/assets/images/book-test-page.png';
import Map from '@app/assets/images/map.png';
import NFT1 from '@app/assets/images/nfts/1.png';
import NFT2 from '@app/assets/images/nfts/2.png';
import NFT3 from '@app/assets/images/nfts/3.png';
import NFT4 from '@app/assets/images/nfts/4.png';
import Group from '@app/assets/images/group.png';
import LogoUniverse from '@app/assets/images/logo-universe.png';
import LogoGraviton from '@app/assets/images/logo-graviton.png';

import CloudsFront from '@app/assets/images/clouds-front.png';
import CloudsBack from '@app/assets/images/clouds-back.png';
import InfoIcon from '@app/assets/icons/info.svg';
import DiscordIcon from '@app/assets/icons/discord.svg';
import GitHubIcon from '@app/assets/icons/github.svg';
import MediumIcon from '@app/assets/icons/medium.svg';
import TwitterIcon from '@app/assets/icons/twitter.svg';

import * as s from './HomePage.styles';
import { Gradient } from '@app/theme';
import { AmountSelector, Progress } from '@app/components';

export const MINT_PRICE = 0.0666;
export const MAX_MINT_AMOUNT = 10000;

export const HomePage: NextPage = () => {
  const [header] = useState([
    'Story',
    'Locations',
    'Deviants',
    'Polymorphs',
    'Lobby Lobsters',
    'Partners',
  ]);

  const [mintAmount, setMintAmount] = useState(1);
  const [minted, setMinted] = useState(6320);

  const [socials] = useState([
    DiscordIcon,
    TwitterIcon,
    MediumIcon,
    GitHubIcon,
  ]);

  const [accordions] = useState([
    {
      name: '45 Base Characters',
      text: 'After the incident, although some polymorphs remained untouched (specifically those that were in the bunker while Charles caused the meltdown) 11 species of Polymorphs were fused with the native humans in various ways, creating 45 Deviant character variations.',
    },
    {
      name: '18 Locations',
      text: 'The island of Metaversia features 18 key locations that will be referenced in the release of the MMORPG. Backgrounds grant a % ownership to 6 different land treasuries that represent unique mini games.',
    },
    {
      name: '100+ Traits ',
      text: 'Deviants salvaged any and all materials they could with what the native Metaversians left behind and combined them with the equipment that what was left of the Polymorphs P.E.E.P.E.E. exploration kit to create more than 100 different tools, accessories, and 7 differrent songs from salvaged records.',
      label: '+ 8 sounds',
    },
  ]);

  const [partners] = useState([
    {
      logo: LogoUniverse,
      h: '52px',
    },
    {
      logo: LogoGraviton,
      h: '52px',
    },
  ]);

  const mintTotalPrice = useMemo(() => {
    return +(mintAmount * MINT_PRICE).toFixed(4);
  }, [mintAmount]);

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
            <Button variant={'ghost'}>Connect Wallet</Button>
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
        <Container py={'300px'} sx={{
          pos: 'relative',
          zIndex: 1,
          _before: {
            background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
            filter: 'blur(160px)',
            transform: 'translateY(-50%)',
            content: '""',
            width: '664px',
            h: '382px',
            pos: 'absolute',
            zIndex: -1,
            left: 0,
            opacity: 0.24,
            top: '50%',
          },
          _after: {
            background: '#A431FF',
            filter: 'blur(160px)',
            transform: 'translateY(-50%)',
            content: '""',
            width: '664px',
            h: '382px',
            pos: 'absolute',
            zIndex: -1,
            left: '50%',
            opacity: 0.24,
            top: '50%',
          }
        }}>
          <Text sx={{
            background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '4px',
            mb: '24px',
          }}>Who Inhabits the Metaversian Republic?</Text>
          <Heading sx={{
            color: 'cream.100',
            fontSize: '40px',
            textAlign: 'center',
            maxW: '1142px',
            margin: 'auto',

            span: {
              bgGradient: Gradient.sea['100'],
              bgClip: 'text',
              textTransform: 'uppercase',
              pos: 'relative',
              display: 'inline-block',

              _before: {
                bgGradient: Gradient.sea['100'],
                pos: 'absolute',
                content: '""',
                w: '100%',
                h: '2px',
                bottom: '0',
              }
            }
          }}>
            Metaversia was previously a paradise resort island inhabited by humans.
            After a fatal nuclear blast, all Metaversian humans disappeared, leaving behind the <Box as={'span'}>Deviants</Box>,{' '}
            <Box as={'span'}>Polymorphs</Box>{' '}and their new friends the{' '}<Box as={'span'}>Lobby Lobsters</Box>.
          </Heading>
        </Container>
        <Container>
          <HStack spacing={'50px'} mb={'32px'}>
            <Box flex={1}>
              <Box sx={{
                bg: 'white',
                borderRadius: '100px',
                w: '100%',
                h: '2px',
              }}></Box>
            </Box>
            <Box>
              <Heading color={'white'} fontSize={'64px'}>Deviants</Heading>
            </Box>
            <Box flex={1}>
              <Box sx={{
                bg: 'white',
                borderRadius: '100px',
                w: '100%',
                h: '2px',
              }}></Box>
            </Box>
          </HStack>

          <Text sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: '20px',
            maxW: '880px',
            m: 'auto',
          }}>
            After the blast caused by Clown Charles, the Deviants experienced irreversible mutations. They are twice the size of Polymorphs and act in ways that cannot be explained. The Polymorphs are worried, because their differences are causing distrust. What will the Deviants do to survive?
          </Text>
        </Container>

        <HStack spacing={'24px'} sx={{
          overflowX: 'hidden',
          w: '100%',
          py: '150px',
        }}>
          {[NFT1, NFT2, NFT3, NFT4, NFT1, NFT2, NFT3, NFT4].map((NFT, i) => (
            <Box key={i} sx={{
              cursor: 'pointer',
              pos: 'relative',
              zIndex: 1,
              transition: '300ms',
              boxSize: '240px',
              flexShrink: 0,

              _hover: {
                transform: 'scale(1.1)',
                zIndex: 1,

                _before: {
                  content: '""',
                  pos: 'absolute',
                  bg: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
                  filter: 'blur(40px)',
                  opacity: 0.7,
                  w: '100%',
                  h: '100%',
                  zIndex: -10,
                }
              },
            }}>
              <Image src={NFT} />
            </Box>
          ))}
        </HStack>
        <Container mt={'-150px'}>
          <HStack spacing={0}>
            <Box flex={1} minW={'472px'}>
              <Accordion {...s.Accordion}>
                {accordions.map((accordion, i) => (
                  <AccordionItem key={i} {...s.AccordionItem}>
                    <Heading>
                      <AccordionButton {...s.AccordionButton}>
                        <HStack flex='1' textAlign='left' spacing={'8px'}>
                          <Box as={'span'}>{accordion.name}</Box>
                          {!!accordion.label && (
                            <Box sx={{
                              bg: 'linear-gradient(45deg, rgba(108, 66, 227, 0.16) 0%, rgba(1, 174, 233, 0.16) 100%)',
                              borderRadius: '100px',
                              padding: '6px 12px',
                              display: 'inline-flex',
                            }}>
                              <Box as={'span'} sx={{
                                background: 'linear-gradient(45deg, #6C42E3 0%, #01AEE9 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                textTransform: 'uppercase',
                                fontSize: '18px',
                              }}>{accordion.label}</Box>
                            </Box>
                          )}
                        </HStack>
                        <AccordionIcon />
                      </AccordionButton>
                    </Heading>
                    <AccordionPanel p={'0 24px 24px'}>
                      <Text fontSize={'18px'}>
                        {accordion.text}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
            <Box>
              <Image src={Group} maxW={'680px'} />
            </Box>
          </HStack>
        </Container>
        <Container sx={{
          pb: '106px',
        }}>
          <Box sx={{
            background: 'rgba(255, 251, 243, 0.2)',
            boxShadow: '0px 8px 32px rgba(35, 19, 27, 0.16), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(16px)',
            borderRadius: '22px',
            padding: '52px 60px',
          }}>
            <Heading sx={{
              color: 'white',
              fontSize: '40px',
              mb: '28px',
              textAlign: 'center',
            }}>
              Mint a Deviant
            </Heading>
            <Progress value={minted} max={MAX_MINT_AMOUNT} h={'48px'} mb={'38px'}>
              <Text color={'white'} fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
                {minted}/{MAX_MINT_AMOUNT} already minted
              </Text>
            </Progress>

            <HStack spacing={0} justifyContent={'space-between'}>
              <AmountSelector
                color={'cream.100'}
                minW={'168px'}
                size={'lg'}
                min={1}
                value={mintAmount}
                onChange={(value) => setMintAmount(value)}
              />
              <Button size={'lg'}>Mint for {mintTotalPrice} ETH</Button>
              <Text color={'cream.40'}>Minting ends in 2d, 20h, 34m</Text>
            </HStack>
          </Box>
        </Container>

        <Box as={'footer'} sx={{
          bg: '#2D1A3F',
          color: 'cream.100',
        }}>
          <Container>
            <Box padding={'88px 0 100px'} textAlign={'center'}>
              <Heading fontSize={'40px'} mb={'16px'}>Our Partners</Heading>
              <Text fontSize={'18px'} mb={'56px'}>Metaversian Republic gets by with a little help from our friends:</Text>
              <SimpleGrid columns={partners.length} spacing={'48px'}>
                {partners.map((p, i) => (
                  <Center key={i} sx={{
                    background: 'rgba(255, 251, 243, 0.08)',
                    boxShadow: '0px 8px 32px rgba(35, 19, 27, 0.16), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(16px)',
                    borderRadius: '16px',
                    padding: '46px',
                  }}>
                    <Image src={p.logo} h={p.h} />
                  </Center>
                ))}
              </SimpleGrid>
            </Box>
            <Box {...s.Separator} />
            <HStack py={'56px'}>
              <HStack spacing={'48px'} w={'100%'}>
                <VStack spacing={'32px'} alignItems={'flex-start'} w={'368px'}>
                  <Image src={Logo} />
                  <Text color={'cream.80'}>
                    The Polymorphs have landed in Metaversia!<br/>
                    As a part of a select group of experts.</Text>
                </VStack>
                <SimpleGrid
                  columns={2}
                  spacingY={'16px'}
                  spacingX={'48px'}
                  gridAutoFlow={'column'}
                  gridTemplateRows={'repeat(3, minmax(0, 1fr))'}
                >
                  {header.map((link, i) => (
                    <Link key={i} href={'#'}>{link}</Link>
                  ))}
                </SimpleGrid>
                <HStack spacing={'16px'} flex={1} justifyContent={'flex-end'}>
                  {socials.map((icon, i) => (
                    <Center sx={{
                      bg: 'rgba(255, 251, 243, 0.1)',
                      borderRadius: 'full',
                      boxSize: '56px',
                      cursor: 'pointer',

                      _hover: {
                        background: 'linear-gradient(45deg, #F34078 0%, #FB884D 100%)',
                        boxShadow: '0px 16px 24px rgba(90, 23, 63, 0.24), inset 0px -2px 4px rgba(255, 255, 255, 0.32), inset 0px 4px 16px rgba(255, 255, 255, 0.32)',
                        borderRadius: '100px',
                      }
                    }}>
                      <Image src={icon} />
                    </Center>
                  ))}
                </HStack>
              </HStack>
            </HStack>
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

