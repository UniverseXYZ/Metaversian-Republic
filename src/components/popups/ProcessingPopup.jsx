import { Button, Link, Text } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import processingIcon from "../../assets/images/processing.png";

const ProcessingPopup = (props) => {
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
            src={processingIcon}
            alt=""
            width={128}
            height={128}
          />
        </div>
        <h1 className="title-error">Processing Mint</h1>
        <p className="info">
          Check your transaction on Etherscan <Link href={"https://etherscan.io/"} sx={{
            fontWeight: 700,
            color: "blue.400",
            textDecoration: "underline"
        }}>here</Link>.
        </p>
        <div className="accent-wrapper">
          <p className="accent">
            If you queue up a second transaction before your first in approved, the second transaction will fail and gas will be lost. This is an essential anti-bot measure, Please wait until your first transaction is approved to avoid disappointment.
          </p>
        </div>
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

ProcessingPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ProcessingPopup;
