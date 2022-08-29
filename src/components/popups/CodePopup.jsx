import { Button } from "@chakra-ui/react";
import Image from "next/image";
import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import errorBubble from "../../assets/images/error-bubble.png";

const CodePopup = (props) => {
  const { close, code } = props;

  return (
    <div className="select_wallet__popup">
      {code && (
        <>
          <img
            className="close__popup"
            onClick={close}
            src={closeIcon}
            alt="Close"
            aria-hidden="true"
          />
          <h1 className="title">{code}</h1>
          <p className="info">
            Download mobile game, and past this code to start playing.
          </p>
        </>
      )}
      {!code && (
        <>
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
            <h1 className="title-error">Oops</h1>
            <p className="info">
              You need to own a V2 polymorph to gain early access.
            </p>
            <div className="buttons-container">
              <Button
                onClick={() =>
                  window.open("https://opensea.io/collection/polymorphs")
                }
              >
                Buy on Opensea
              </Button>
              <Button
                onClick={() => window.open("https://polymorphs.universe.xyz/")}
                className={"ghost-button"}
                variant={"ghost"}
              >
                View Polymorphs
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

CodePopup.propTypes = {
  close: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodePopup;
