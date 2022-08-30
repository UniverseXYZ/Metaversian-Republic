import BodyIcon from "@app/assets/images/body.png";
import HeadIcon from "@app/assets/images/head.png";
import { Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import { useState } from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import useWallet from "utils/wallet/useWallet";
import {
  selectWalletAddress,
  selectWalletType,
} from "utils/wallet/wallet.slice";
import {
  getCoinBaseProvider,
  walletConnectProvider,
} from "utils/wallet/wallet.web3.providers";
import * as Web3Token from "web3-token";
import googlePlayStore from "../../assets/images/google-play-store-disabled.png";
import iOSStore from "../../assets/images/iOS-store.png";
import CodePopup from "../popups/CodePopup";
import SelectWalletPopup from "../popups/SelectWalletPopup";
import classes from "./ZombieGame.module.scss";

const ZombieGame = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [code, setCode] = useState("");
  const walletAddress = useSelector(selectWalletAddress);
  const walletType = useSelector(selectWalletType);
  const [showInstallWalletPopup, setShowInstallWalletPopup] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState("");
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { web3Connect } = useWallet();

  const handleGenerateCode = async () => {
    let provider;
    if (walletType === "Metamask") {
      provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    if (walletType === "WalletConnect") {
      provider = new ethers.providers.Web3Provider(walletConnectProvider);
    }
    if (walletType === "CoinBase") {
      const coinbaseWalletProvider = getCoinBaseProvider();
      provider = new ethers.providers.Web3Provider(coinbaseWalletProvider);
    }

    const signer = provider.getSigner();
    const token = await Web3Token.sign(
      async (msg) => await signer.signMessage(msg),
      "1d"
    );
    const fetchResponse = await fetch("/api/getUserId", {
      headers: {
        Authorization: token,
      },
    });
    const getUserIdResponse = await fetchResponse.json();

    if (getUserIdResponse.errorMessage) {
      setShowErrorModal(true);
    }
    if (getUserIdResponse.code) {
      setOpenPopup(true);
      setCode(getUserIdResponse.code);
    }
  };

  return (
    <Container
      className={classes["container"]}
      color={"white"}
      pos={"relative"}
    >
      <div className={classes["goblin"]}>
        <Image
          src={BodyIcon}
          sx={{
            pos: "absolute",
            zIndex: 0,
            pointerEvents: "none",
          }}
          alt=""
        />
        <Image
          src={HeadIcon}
          sx={{
            pos: "absolute",
            zIndex: 1,
            pointerEvents: "none",
          }}
          alt=""
        />
      </div>
      <div className={classes["grid"]}>
        <div className={classes["main-heading"]}>
          <Heading fontSize={"88px"} lineHeight={"88px"}>
            Metaversian Republic
          </Heading>
          <Text>
            The Polymorphs have landed in Metaversia! As a part of a select
            group of experts, Polymorphs take part in a special expedition for
            the Polymorphic Extreme Edition of Planetary Exploration Enterprise
            and it is up to them to discover everything that Metaversia has to
            offer.
          </Text>
        </div>
        {/* <Box> */}
        <div className={classes["play-a-game"]}>
          <div className={classes["heading"]}>Play a Game</div>
          <div className={classes["steps"]}>
            <div>
              <span className={classes["point"]}>1</span>
            </div>
            <div>Connect your wallet and generate a code</div>
          </div>
          <div className={classes["steps"]}>
            <div>
              <span className={classes["point"]}>2</span>
            </div>
            <div>
              Enter the code in the mobile game, choose a Polymorph and play!
            </div>
          </div>
          {walletAddress ? (
            <Button
              size={"lg"}
              my={"32px"}
              w={"100%"}
              onClick={handleGenerateCode}
            >
              Generate code to play
            </Button>
          ) : (
            <Popup
              closeOnDocumentClick={false}
              trigger={
                <Button size={"lg"} my={"32px"} w={"100%"}>
                  Connect Wallet
                </Button>
              }
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
            </Popup>
          )}
          <div className={classes["store-buttons"]}>
            <button
              onClick={() => window.open("https://www.apple.com/app-store/")}
            >
              <img src={iOSStore} alt="" />
            </button>
            <button disabled>
              <img src={googlePlayStore} alt="" />
            </button>
          </div>
        </div>
        {/* </Box> */}
      </div>
      {/* </HStack> */}
      <Popup open={openPopup}>
        {(close) => (
          <CodePopup
            close={() => {
              setOpenPopup(false);
              setCode("");
              close();
            }}
            code={code}
          />
        )}
      </Popup>
      <Popup open={showErrorModal}>
        {(close) => (
          <CodePopup
            close={() => {
              setShowErrorModal(false);
              setCode("");
              close();
            }}
            code={""}
          />
        )}
      </Popup>
    </Container>
  );
};

export default ZombieGame;
