import { AmountSelector, Progress } from '@app/components';
import {
  Box,
  Button, Container, Heading, HStack, Text
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';

const MINT_PRICE = 0.0666;
const MAX_MINT_AMOUNT = 10000;

const DeviantsMinComponent = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const [minted, setMinted] = useState(6320);
  const mintTotalPrice = useMemo(() => {
    return +(mintAmount * MINT_PRICE).toFixed(4);
  }, [mintAmount]);

  return (
    <Container>
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
  );
}

export default DeviantsMinComponent;