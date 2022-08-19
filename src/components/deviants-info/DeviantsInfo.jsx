import Group from '@app/assets/images/group.png';
import NFT1 from '@app/assets/images/nfts/1.png';
import NFT2 from '@app/assets/images/nfts/2.png';
import NFT3 from '@app/assets/images/nfts/3.png';
import NFT4 from '@app/assets/images/nfts/4.png';
import { Gradient } from '@app/theme';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text
} from '@chakra-ui/react';
import DeviantsMintComponent from '../deviants-mint/DeviantsMintsComponent';

import { useState } from 'react';
import * as s from '../../pages/home-page/HomePage.styles';

const DeviantsInfo = () => {
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

  return (
    <>
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
      <DeviantsMintComponent />
    </>
  );
}

export default DeviantsInfo;