import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { selectShowError, selectWrongNetwork, setShowError, setShowWrongNetwork } from 'utils/app/app.slice';
import { useAppDispatch } from 'utils/dispatch';
import useWallet from 'utils/wallet/useWallet';
import ErrorPopup from './ErrorPopup';
import WrongNetworkPopup from './WrongNetworkPopup';

export const Popups = () => {
  const showWrongNetworkPopup = useSelector(selectWrongNetwork);
  const { changeNetwork } = useWallet();
  const showError = useSelector(selectShowError);
  const dispatch = useAppDispatch();
  const handleNetworkPopUpClose = () => {
    dispatch(setShowWrongNetwork(false));
  };
  const handleErrorPopUpClose = () => {
    dispatch(setShowError(false));
  };


  return (
    <>
      <Popup closeOnDocumentClick={false} open={showWrongNetworkPopup}>
        <WrongNetworkPopup close={handleNetworkPopUpClose} switchNetwork={changeNetwork} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showError}>
        <ErrorPopup close={handleErrorPopUpClose} />
      </Popup>
    </>
  );
}
