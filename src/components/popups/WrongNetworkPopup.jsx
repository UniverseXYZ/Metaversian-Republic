import { Button } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import errorBubble from "../../assets/images/error-bubble.png";

const WrongNetworkPopup = (props) => {
  const { close } = props;

  return (
    <div className="select_wallet__popup">
      <img
        className="close__popup"
        onClick={close}
        src={closeIcon}
        alt="Close"
        aria-hidden="true"
      />
      <div className="error__popup">
        <div className="image__wrapper">
          <Image
            className="error__bubble"
            src={errorBubble}
            alt=""
            width={128}
            height={128}
          />
        </div>
        <h1 className="title-error">Wrong Network</h1>
        <p className="info">
          Please switch your wallet network from <strong>Ropsten</strong> to <strong>Mainnet</strong> or <strong>Rinkeby</strong> to use the website. If you still encounter problems, you may want to switch to a different wallet.
        </p>
        <div className="buttons-container">
          <Button
            //onClick={() =>{}}
          >
            Switch Wallet
          </Button>
        </div>
      </div>
    </div>
  );
};

WrongNetworkPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default WrongNetworkPopup;
