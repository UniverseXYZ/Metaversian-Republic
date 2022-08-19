import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";

const CodePopup = (props) => {
  const {
    close,
    code
  } = props;

  return (
    <div className="select_wallet__popup">
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
    </div>
  )
}

CodePopup.propTypes = {
  close: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
};

export default CodePopup;