import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { selectApp, setShowFundsError, setShowMintError, setShowProcessingPopup, setShowSuccessfulPopup, setShowWrongNetwork } from 'utils/app/app.slice';
import { useAppDispatch } from 'utils/dispatch';
import useWallet from 'utils/wallet/useWallet';
import ErrorPopup from './ErrorPopup';
import ProcessingPopup from './ProcessingPopup';
import SuccessPopup from './SuccessPopup';
import WrongNetworkPopup from './WrongNetworkPopup';

export const Popups = () => {
  const {
    showWrongNetwork,
    showProcessingPopup,
    showSuccessfulPopup,
    showMintError,
    showFundsError,
    transactionHash
  } = useSelector(selectApp);
  const { changeNetwork } = useWallet();
  const dispatch = useAppDispatch();
  const handleNetworkPopUpClose = () => {
    dispatch(setShowWrongNetwork(false));
  };
  const handleErrorPopUpClose = () => {
    dispatch(setShowFundsError(false));
    dispatch(setShowMintError(false));
  };
  const handleProcessingPopupClose = () => {
    dispatch(setShowProcessingPopup(false));
  };

  const handleSuccessPopupClose = () => {
    dispatch(setShowSuccessfulPopup(false));
  };

  return (
    <>
      <Popup closeOnDocumentClick={false} open={showWrongNetwork}>
        <WrongNetworkPopup close={handleNetworkPopUpClose} switchNetwork={changeNetwork} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showMintError}>
        <ErrorPopup close={handleErrorPopUpClose} showFundsError={showFundsError} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showProcessingPopup}>
        <ProcessingPopup close={handleProcessingPopupClose} transactionHash={transactionHash} />
      </Popup>
      <Popup closeOnDocumentClick={false} open={showSuccessfulPopup}>
        <SuccessPopup close={handleSuccessPopupClose} />
      </Popup>
    </>
  );
}
