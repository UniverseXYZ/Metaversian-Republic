import blackLogo from "@app/assets/images/Logo-black.svg";
import Logo from "@app/assets/images/Logo.svg";
import { Box, Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import Popup from "reactjs-popup";
import { shortenEthereumAddress } from "../../../utils/helpers/format.js";
import arrow from "../../assets/icons/arrow-up-black.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";
import ethIcon from "../../assets/icons/eth-icon.svg";
import cross from "../../assets/icons/header-mobile-menu-black-X.svg";
import mobileMenu from "../../assets/icons/header-mobile-menu.svg";
import walletIcon2 from "../../assets/icons/wallet-icon-2.svg";
import walletIcon from "../../assets/icons/wallet-icon.svg";
import profileIcon from "../../assets/images/profile-tab-icon.png";
import SelectWalletPopup from "../popups/SelectWalletPopup";
import classes from "./Header.module.scss";

const Header = (props) => {
  const {
    handleConnectWallet,
    showInstallWalletPopup,
    setShowInstallWalletPopup,
    selectedWallet,
    setSelectedWallet,
    walletAddress,
    header,
    disconnect,
    wallet,
  } = props;

  const [showProfile, setShowProfile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className={classes["header"]}>
        <Image src={Logo} alt={"Logo"} h={"32px"} w={"164px"} />
        <HStack spacing={"40px"}>
          {header.map((section, i) => (
            <Link
              key={i}
              href={
                i === 0
                  ? "#storySection"
                  : i === 1
                  ? "#locationsSection"
                  : i === 2
                  ? "#deviantsSection"
                  : i === 3
                  ? "#mobileGameSection"
                  : i === 4
                  ? "#polymorphsSection"
                  : i === 5
                  ? "#lobbyLobstersSection"
                  : i === 6
                  ? "#partnersSection"
                  : null
              }
              sx={{
                color: "white",
              }}
            >
              {section.name}
            </Link>
          ))}
        </HStack>
        <Box>
          {!walletAddress ? (
            <Popup
              closeOnDocumentClick={false}
              trigger={<Button variant={"ghost"}>Connect Wallet</Button>}
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
          ) : (
            <Text className={classes["profile-button-wrapper"]}>
              <Button className={classes["profile-button"]} variant={"ghost"}>
                <>
                  <Image src={profileIcon} width="24px" height="24px" alt="" />
                  {shortenEthereumAddress(walletAddress)}
                  <Image className={classes["arrow"]} src={arrowUp} alt="" />
                </>
              </Button>
              <div className={classes["dropdown-profile"]}>
                <div className={classes["profile-header"]}>
                  <div className={classes["eth-address"]}>
                    <Image src={walletIcon} alt="" />
                    <span>
                      {walletAddress
                        ? shortenEthereumAddress(walletAddress)
                        : ""}
                    </span>
                  </div>
                  <div className={classes["balance"]}>
                    <Image src={ethIcon} alt="" />
                    <span>Balance {(+wallet.balance).toFixed(4)} ETH</span>
                  </div>
                  <div>
                    <div>Polymorphs: {wallet.polymorphsCount}</div>
                  </div>
                </div>
                <div className={classes["body"]}>
                  <Button
                    variant={"ghost"}
                    onClick={() => {
                      disconnect(wallet.type);
                    }}
                  >
                    <div>Disconnect</div>
                  </Button>
                </div>
              </div>
            </Text>
          )}
        </Box>
      </header>
      <header
        className={`${classes["header-tablet"]} ${
          showMenu && classes["lightHeader"]
        }`}
      >
        {!showMenu && <Image src={Logo} alt={"Logo"} h={"32px"} w={"164px"} />}
        {showMenu && (
          <Image src={blackLogo} alt={"Logo"} h={"32px"} w={"164px"} />
        )}
        <div>
          {walletAddress && (
            <button
              className={classes["profile-button"]}
              onClick={() => {
                setShowProfile((prevState) => !prevState);
                setShowMenu(false);
              }}
            >
              <Image src={walletIcon2} alt="" />
              {showProfile && (
                <div className={classes["dropdown-profile"]}>
                  <div className={classes["profile-header"]}>
                    <div className={classes["eth-address"]}>
                      <Image src={walletIcon} alt="" />
                      <span>
                        {walletAddress
                          ? shortenEthereumAddress(walletAddress)
                          : ""}
                      </span>
                    </div>
                    <div className={classes["balance"]}>
                      <Image src={ethIcon} alt="" />
                      <span>Balance {(+wallet.balance).toFixed(4)} ETH</span>
                    </div>
                    <div className={classes["polymorphs"]}>
                      Polymorphs: {wallet.polymorphsCount}
                    </div>
                  </div>
                  <div className={classes["body"]}>
                    <Button
                      variant={"ghost"}
                      onClick={() => {
                        disconnect(wallet.type);
                      }}
                    >
                      <div>Disconnect</div>
                    </Button>
                  </div>
                </div>
              )}
            </button>
          )}

          <button
            onClick={() => {
              setShowMenu((prevState) => !prevState);
              setShowProfile(false);
            }}
          >
            {!showMenu ? (
              <Image src={mobileMenu} alt="" />
            ) : (
              <Image src={cross} alt="" />
            )}
            {showMenu && (
              <>
                <div className={classes["menu"]}>
                  {header.map((section, i) => (
                    <div className={classes["menu-row"]} key={i}>
                      <Link
                        key={i}
                        href={
                          i === 0
                            ? "#storySection"
                            : i === 1
                            ? "#locationsSection"
                            : i === 2
                            ? "#deviantsSection"
                            : i === 3
                            ? "#mobileGameSection"
                            : i === 4
                            ? "#polymorphsSection"
                            : i === 5
                            ? "#lobbyLobstersSection"
                            : i === 6
                            ? "#partnersSection"
                            : null
                        }
                        sx={{
                          color: "#1C0531",
                        }}
                      >
                        {section.name}{" "}
                        <Image
                          className={classes["arrow"]}
                          src={arrow}
                          alt=""
                        />
                      </Link>
                    </div>
                  ))}
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
              </>
            )}
          </button>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  handleConnectWallet: PropTypes.func.isRequired,
  showInstallWalletPopup: PropTypes.bool.isRequired,
  setShowInstallWalletPopup: PropTypes.func.isRequired,
  selectedWallet: PropTypes.string.isRequired,
  setSelectedWallet: PropTypes.func.isRequired,
  walletAddress: PropTypes.string.isRequired,
  header: PropTypes.array.isRequired,
  disconnect: PropTypes.func.isRequired,
  wallet: PropTypes.object.isRequired,
};

export default Header;
