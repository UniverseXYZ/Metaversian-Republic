import Logo from "@app/assets/images/Logo.svg";
import { Box, Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import { shortenEthereumAddress } from "../../../utils/helpers/format.js";
import arrowUp from "../../assets/icons/arrow-up.svg";
import ethIcon from "../../assets/icons/eth-icon.svg";
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
    wallet
  } = props;

  return (
    <Box
      as={"header"}
      sx={{
        alignItems: "center",
        bg: "rgba(28, 5, 49, 0.1)",
        backdropFilter: "blur(16px)",
        display: "flex",
        justifyContent: "space-between",
        padding: "23px 24px",
        zIndex: 1,
        position: "relative",
      }}
    >
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
                ? "#polymorphsSection"
                : i === 3
                ? "#lobbyLobstersSection"
                : i === 4
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
                <Image className={classes["arrow"]} src={arrowUp} />
              </>
            </Button>
            <div className={classes["dropdown-profile"]}>
              <div className={classes["header"]}>
                <div className={classes["eth-address"]}>
                  <Image src={walletIcon} />
                  <span>
                    {walletAddress ? shortenEthereumAddress(walletAddress) : ""}
                  </span>
                </div>
                <div className={classes["balance"]}>
                  <Image src={ethIcon} />
                  <span>Balance {(+wallet.balance).toFixed(4)} ETH</span>
                </div>
                <div type="button">
                  <div>Polymorphs: {wallet.polymorphsCount}</div>
                </div>
              </div>
              <div className={classes["body"]}>
                <Button variant={"ghost"} onClick={() => {
                  disconnect(wallet.type);
                }}>
                  <div>Disconnect</div>
                </Button>
              </div>
            </div>
          </Text>
        )}
      </Box>
    </Box>
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
