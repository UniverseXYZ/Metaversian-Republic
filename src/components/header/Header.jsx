import Logo from '@app/assets/images/Logo.svg';
import {
  Box,
  Button,
  HStack,
  Image,
  Link,
  Text
} from '@chakra-ui/react';
import PropTypes from "prop-types";
import Popup from 'reactjs-popup';
import SelectWalletPopup from "../popups/SelectWalletPopup";

const Header = (props) => {
  const {
    handleConnectWallet,
    showInstallWalletPopup,
    setShowInstallWalletPopup,
    selectedWallet,
    setSelectedWallet,
    walletAddress,
    connected,
    header
  } = props;

  return (
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
        {header.map((section, i) => (
          <Link key={i} href={"#"} sx={{
            color: 'white',
          }}>{section.name}</Link>
        ))}
      </HStack>
      <Box>
        {!connected ? <Popup
          closeOnDocumentClick={false}
          trigger={
            <Button variant={'ghost'}>Connect Wallet</Button>
          }
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

        </Popup> :
          <Text>
            {walletAddress}
          </Text>
        }
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
  connected: PropTypes.bool.isRequired,
  header: PropTypes.array.isRequired
};

export default Header;