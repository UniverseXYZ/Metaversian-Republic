import { Button } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import successBubble from "../../assets/images/success-bubble.png";

const SuccessPopup = (props) => {
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
            src={successBubble}
            alt=""
            width={128}
            height={128}
          />
        </div>
        <h1 className="title-error">Success!</h1>
        <p className="info">
          Your Deviant has been minted, and will appear in your wallet soon.
        </p>
        <div className="buttons-container">
          <Button
            onClick={close}
            className={"ghost-button"}
            variant={"ghost"}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

SuccessPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default SuccessPopup;
