import PropTypes from "prop-types";
import closeIcon from "../../assets/images/close-menu.svg";
import LocationsSlider from '../locations/slider/LocationsSlider';

const LocationsPopup = (props) => {
  const { close } = props;

  return (
    <div className="custom-popup">
      <img
        className="custom-popup__close"
        onClick={close}
        src={closeIcon}
        alt="Close"
        aria-hidden="true"
      />
      <LocationsSlider />
    </div>
  );
};

LocationsPopup.propTypes = {
  close: PropTypes.func.isRequired,
};

export default LocationsPopup;
