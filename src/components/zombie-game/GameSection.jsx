import { useState } from "react";
import { useSelector } from "react-redux";
import Web3Token from "web3-token";
import { ethers } from "ethers";
import { Button, Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import Popup from "reactjs-popup";
import BlurElipse from "../../assets/images/blur-elipse-1.png";
import BlurElipse2 from "../../assets/images/blur-elipse-2.png";
import googlePlayStore from "../../assets/images/google-play-store-disabled.png";
import iOSStore from "../../assets/images/iOS-store.png";
import zombieHand from "../../assets/images/zombie-hand.png";
import SelectWalletPopup from "../popups/SelectWalletPopup";
import classes from "./GameSection.module.scss";
import { getCoinBaseProvider, walletConnectProvider } from "utils/wallet/wallet.web3.providers";
import { selectWalletType } from "utils/wallet/wallet.slice";
import CodePopup from "@app/components/popups/CodePopup";

const GameSection = ({
  handleConnectWallet,
  showInstallWalletPopup,
  setShowInstallWalletPopup,
  selectedWallet,
  setSelectedWallet,
  walletAddress,
}) => {

  const walletType = useSelector(selectWalletType);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [code, setCode] = useState("");

  // At this time we do not need to abstract the func
  // *Reused from `ZombieGame` component
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
    <div className={classes["container"]}>
      {/*Hide duplicated fragment for now*/}
      {/*<div className={classes["subcontainer-info"]}>*/}
      {/*  <div className={classes["heading"]}>*/}
      {/*    Who Inhabits the Metaversian Republic?*/}
      {/*  </div>*/}
      {/*  <div className={classes["body"]}>*/}
      {/*    Metaversia was previously a paradise resort island inhabited by*/}
      {/*    humans. After a fatal nuclear blast, all Metaversian humans*/}
      {/*    disappeared, leaving behind the Deviants, Polymorphs and their new*/}
      {/*    friends the Lobby Lobsters.*/}
      {/*  </div>*/}
      {/*  <div className={classes["elipse"]}>*/}
      {/*    <Image src={BlurElipse} width={1052} height={500} alt="" />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className={classes["subcontainer-wrapper"]}>
        <div className={classes["blur-elipse-2"]}>
          <Image src={BlurElipse2} width={800} height={800} alt="" />
        </div>
        <div className={classes["subcontainer-game"]} id={"mobileGameSection"}>
          <div className={classes["info"]}>
            <div className={classes["heading"]}>Mobile Game</div>
            <div className={classes["subheading"]}>
              Kill zombies with your Polymorph, and challenge your friends.
            </div>
            <div className={classes["steps"]}>
              <span>1</span>
              <div>Connect your wallet and generate a code</div>
            </div>
            <div className={classes["steps"]}>
              <span>2</span>
              <div>
                Enter code in the mobile game, choose a Polymorph, and play
              </div>
            </div>
            <div className={classes["store-buttons"]}>
              <Tooltip hasArrow label="">
                <span>
                  <button
                    onClick={() =>
                      window.open("https://www.apple.com/app-store/")
                    }
                  >
                    <img src={iOSStore} alt="" />
                  </button>{" "}
                </span>
              </Tooltip>
              <Tooltip hasArrow label="Coming soon">
                <span>
                  <button disabled>
                    <img src={googlePlayStore} alt="" />
                  </button>
                </span>
              </Tooltip>
            </div>
            <div className={classes["connect"]}>
              {walletAddress && (
                <Button onClick={handleGenerateCode}>
                  Generate code to play
                </Button>
              )}
              {!walletAddress && (
                <Popup
                  closeOnDocumentClick={false}
                  trigger={<Button>Connect Wallet</Button>}
                >
                  {(close) => (
                    <SelectWalletPopup
                      close={close}
                      handleConnectWallet={handleConnectWallet}
                      showInstallWalletPopup={showInstallWalletPopup}
                      setShowInstallWalletPopup={setShowInstallWalletPopup}
                      selectedWallet={selectedWallet}
                      setSelectedWallet={setSelectedWallet}
                    />
                  )}
                </Popup>
              )}
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
            </div>
          </div>
          <div className={classes["zombie-hand"]}>
            <Image
              src={zombieHand}
              width={988}
              height={577}
              layout="responsive"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
