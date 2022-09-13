import { Button } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import errorBubble from "../../assets/images/error-bubble.png";

const InstallMetamaskPopup = (props) => {
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
        <h1 className="title-error">Install Metamask</h1>
        <p className="info">
          You need to have Metamask installed to continue. Once you have installed it, please refresh the page.
        </p>
        <div className="buttons-container">
          <Button
            //onClick={() =>{}}
          >
            Install Metamask
          </Button>
          <Button
            onClick={close}
            className={"ghost-button"}
            variant={"ghost"}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

InstallMetamaskPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default InstallMetamaskPopup;
