import { Button } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import errorBubble from "../../assets/images/error-bubble.png";

const ErrorPopup = (props) => {
  const { close, showFundsError } = props;

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
        <h1 className="title-error">Mint Failed</h1>
        {
          showFundsError ?
            <p className="info">
              You don’t have enough funds in you wallet.
            </p>
            : <></>
        }
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

ErrorPopup.propTypes = {
  close: PropTypes.func.isRequired,
  showFundsError: PropTypes.bool.isRequired,
};

export default ErrorPopup;
