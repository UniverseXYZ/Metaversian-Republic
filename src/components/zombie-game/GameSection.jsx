import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Popup from "reactjs-popup";
import BlurElipse from "../../assets/images/blur-elipse-1.png";
import BlurElipse2 from "../../assets/images/blur-elipse-2.png";
import iOSStore from "../../assets/images/iOS-store.png";
import zombieHand from "../../assets/images/zombie-hand.png";
import SelectWalletPopup from "../popups/SelectWalletPopup";
import classes from "./GameSection.module.scss";

const GameSection = ({
  handleConnectWallet,
  showInstallWalletPopup,
  setShowInstallWalletPopup,
  selectedWallet,
  setSelectedWallet,
  walletAddress,
}) => {
  return (
    <div className={classes["container"]}>
      <div className={classes["subcontainer-info"]}>
        <div className={classes["heading"]}>
          Who Inhabits the Metaversian Republic?
        </div>
        <div className={classes["body"]}>
          Metaversia was previously a paradise resort island inhabited by
          humans. After a fatal nuclear blast, all Metaversian humans
          disappeared, leaving behind the Deviants, Polymorphs and their new
          friends the Lobby Lobsters.
        </div>
        <div className={classes["elipse"]}>
          <Image src={BlurElipse} width={1052} height={500} alt="" />
        </div>
      </div>
      <div className={classes["subcontainer-wrapper"]}>
        <div className={classes["blur-elipse-2"]}>
          <Image src={BlurElipse2} width={995} height={995} alt="" />
        </div>
        <div className={classes["subcontainer-game"]}>
          <div className={classes["info"]}>
            <div className={classes["heading"]}>Mobile Game</div>
            <div className={classes["subheading"]}>
              Kill zombies with your Polymorph, and challenge with your friends.
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
            <div className={classes["ios-button"]}>
              <button
                onClick={() => window.open("https://www.apple.com/app-store/")}
              >
                <img src={iOSStore} alt="" />
              </button>
            </div>
            <div className={classes["connect"]}>
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
