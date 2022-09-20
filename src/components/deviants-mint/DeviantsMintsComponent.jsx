import { AmountSelector, Progress } from '@app/components';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import { parseEther } from 'ethers/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { setShowError, setShowFundsError, setShowMintError, setShowProcessingPopup, setShowSuccessfulPopup, setTransactionHash } from 'utils/app/app.slice';
import { useAppDispatch } from 'utils/dispatch';
import { abi } from 'utils/wallet/deviants.abi.json';
import { getMintedDeviants } from 'utils/wallet/deviants.helpers';
import useWallet from 'utils/wallet/useWallet';
import { selectBalance, selectDiscountDeviantCount, selectWallet, selectWalletAddress } from 'utils/wallet/wallet.slice';
import SelectWalletPopup from '../popups/SelectWalletPopup';
import InfoIcon from "@app/assets/icons/info.svg";

const MINT_PRICE = 0.0666;
const MAX_MINT_AMOUNT = 10000;

const DeviantsMinComponent = ({ isShort }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const walletAddress = useSelector(selectWalletAddress);
  const [minted, setMinted] = useState(0);
  const balance = useSelector(selectBalance);
  const { callContract, getBalance } = useWallet();
  const [showInstallWalletPopup, setShowInstallWalletPopup] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');
  const { web3Connect, web3Disconnect } = useWallet();
  const wallet = useSelector(selectWallet);
  const discountDeviantsCount = useSelector(selectDiscountDeviantCount);
  const mintTotalPrice = useMemo(() => {
    return +(mintAmount * MINT_PRICE).toFixed(4);
  }, [mintAmount]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (minted == 0) {
      getMintedDeviants()
        .then(count => {
          setMinted(count);
        });
    }
  }, [minted]);

  const handleMint = async () => {
    let addressBalance = await getBalance(walletAddress);

    if (+addressBalance < (mintAmount * MINT_PRICE)) {
      dispatch(setShowFundsError(true));
      dispatch(setShowMintError(true));
      return;
    }
    const mintTnx = await callContract(abi, "mint", mintAmount, { value: parseEther((mintAmount * MINT_PRICE).toString()) });
    dispatch(setTransactionHash(mintTnx.hash));
    dispatch(setShowProcessingPopup(true));

    mintTnx
      .wait()
      .then((txReceipt) => {
        if (txReceipt.status != 1) {
          dispatch(setShowProcessingPopup(false));
          dispatch(setShowError(true));
          return;
        }

        dispatch(setShowProcessingPopup(false));
        dispatch(setShowSuccessfulPopup(true));
      })
  }

  const handleDiscountMint = async () => {
    let addressBalance = await getBalance(walletAddress);

    if (+addressBalance < (mintAmount * MINT_PRICE)) {
      dispatch(setShowFundsError(true));
      dispatch(setShowMintError(true));
      return;
    }
    const mintTnx = await callContract(abi, "discountMint", mintAmount, { value: parseEther((mintAmount * (MINT_PRICE / 2)).toString()) });
    dispatch(setTransactionHash(mintTnx.hash));
    dispatch(setShowProcessingPopup(true));

    mintTnx
      .wait()
      .then((txReceipt) => {
        if (txReceipt.status != 1) {
          dispatch(setShowProcessingPopup(false));
          dispatch(setShowError(true));
          return;
        }
        dispatch(setShowProcessingPopup(false));
        dispatch(setShowSuccessfulPopup(true));
      })
  }

  const discountMintVisability = useMemo(() => {
    if (mintAmount <= discountDeviantsCount) {
      return true;
    }
    return false;
  }, [mintAmount, discountDeviantsCount]);

  return (
    <Container>
      <Box sx={{
        background: 'rgba(255, 251, 243, 0.2)',
        boxShadow: '0px 8px 32px rgba(35, 19, 27, 0.16), inset 0px 0px 1px 1px rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(16px)',
        borderRadius: '22px',
      }}  padding={{ base: '30px', md: '52px 60px' }}>
        <Heading sx={{
          color: 'white',
          fontSize: '40px',
          mb: '24px',
          textAlign: 'center',
        }}>
          Mint a Deviant
        </Heading>
        <Flex gap={{ base: 6, md: isShort ? 6 : 0 }} w={'100%'} flexDir={{ base: "column-reverse", md: isShort ? "column-reverse" : "column" }}  >
          <Progress value={minted} max={MAX_MINT_AMOUNT} h={'48px'} mb={{ base: 0, md: isShort ? 0 : '38px' }}>
            <Text color={'white'} fontSize={'16px'} fontWeight={'bold'} textAlign={'center'}>
              {minted}/{MAX_MINT_AMOUNT} already minted
            </Text>
          </Progress>

          <HStack
            spacing={"6px"}
            justifyContent={"center"}
            display={isShort ? 'flex' : 'none'}
          >
            <Image src={InfoIcon} alt="" />
            <Link href={"#deviantsSection"} textDecoration={"underline"}>
              Learn more about Deviants
            </Link>
          </HStack>

          <Flex gap={8} flexDir={{ base: "column", md: isShort ? "column" : "row" }} justifyContent={'space-between'} alignItems={'center'}>
            <AmountSelector
              color={'cream.100'}
              minW={'168px'}
              w={{ base: '100%', md: isShort ? '100%' : 'auto' }}
              size={'lg'}
              min={1}
              max={20}
              value={mintAmount}
              onChange={(value) => setMintAmount(value)}
            />
            {walletAddress ?
              !discountMintVisability ?
                (<Button size={'lg'} w={{ base: '100%', md: isShort ? '100%' : 'auto' }} onClick={handleMint}>Mint for {mintTotalPrice} ETH</Button>)
                :
                (<Button size={'lg'} w={{ base: '100%', md: isShort ? '100%' : 'auto' }} onClick={handleDiscountMint}>Discount mint for {mintTotalPrice / 2} ETH</Button>)

              :
              (<Popup
                closeOnDocumentClick={false}
                trigger={<Button size={'lg'} w={{ base: '100%', md: isShort ? '100%' : 'auto' }}>Connect Wallet</Button>}
              >
                {(close) => (
                  <SelectWalletPopup
                    close={close}
                    handleConnectWallet={web3Connect}
                    showInstallWalletPopup={showInstallWalletPopup}
                    setShowInstallWalletPopup={setShowInstallWalletPopup}
                    selectedWallet={selectedWallet}
                    setSelectedWallet={setSelectedWallet}
                  />
                )}
              </Popup>)
            }
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}

export default DeviantsMinComponent;
