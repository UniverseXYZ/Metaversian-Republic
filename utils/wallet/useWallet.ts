import { getAddress } from "ethers/lib/utils";
import { useCallback } from "react";
import { useAppDispatch } from "utils/dispatch";
import { setWalletAddress, setWalletType } from "./wallet.slice";
import { getCoinBaseProvider, walletConnectProvider } from "./wallet.web3.providers";

export const useWallet = () => {
  const dispatch = useAppDispatch();
  const web3Connect = useCallback(async (wallet: string) => {
    if (wallet === 'Metamask') {
      const [address] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
        params: []
      });

      dispatch(setWalletAddress(getAddress(address)));
      dispatch(setWalletType('Metamask'));
    }
    if (wallet === 'WalletConnect') {
      walletConnectProvider
        .enable()
        .then(([account]) => {
          const walletAddress = getAddress(account);
          dispatch(setWalletAddress(walletAddress));
          dispatch(setWalletType('WalletConnect'));
        })
        .catch((error) => {
          console.log(error);
        })
    }
    if (wallet === 'CoinBase') {
      const coinBaseProvider = getCoinBaseProvider();

      const [address] = await coinBaseProvider.request({
        method: 'eth_requestAccounts',
        params: []
      });

      dispatch(setWalletAddress(getAddress(address)));
      dispatch(setWalletType('CoinBase'));
    }
  }, [dispatch]);
  return {
    web3Connect
  }
}

export default useWallet;