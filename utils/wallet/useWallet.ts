import { providers } from "ethers";
import { formatEther, getAddress } from "ethers/lib/utils";
import { useCallback, useRef } from "react";
import { useAppDispatch } from "utils/dispatch";
import { getPolymorphsCount } from "./polymorphs.helpers";
import { setBalance, setPolymorphsCount, setWalletAddress, setWalletType } from "./wallet.slice";
import { getCoinBaseProvider, walletConnectProvider } from "./wallet.web3.providers";

export const useWallet = () => {
  const dispatch = useAppDispatch();
  let walletAddress = useRef<string>();

  const web3Connect = useCallback(async (wallet: string) => {
    const provider = new providers.InfuraProvider('homestead', process.env.INFURAID);

    if (wallet === 'Metamask') {
      const [address] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
        params: []
      });
      walletAddress.current = address;
      dispatch(setWalletType('Metamask'));
    }

    if (wallet === 'WalletConnect') {
      [walletAddress.current] = await walletConnectProvider.enable()
      dispatch(setWalletType('WalletConnect'));
    }

    if (wallet === 'CoinBase') {
      const { coinbaseWalletProvider } = getCoinBaseProvider();
      const [address] = await coinbaseWalletProvider.request({
        method: 'eth_requestAccounts',
        params: []
      });
      walletAddress.current = address;
      dispatch(setWalletType('CoinBase'));
    }

    dispatch(setWalletAddress(getAddress(<string>walletAddress.current)));

    const balance = formatEther(await provider.getBalance(<string>walletAddress.current));

    const polymorphsCount = await getPolymorphsCount(<string>walletAddress.current);

    dispatch(setBalance(balance));
    dispatch(setPolymorphsCount(polymorphsCount));
  }, [dispatch]);

  const web3Disconnect = useCallback(async (wallet: string) => {
    if (wallet === 'Metamask') {
      dispatch(setWalletAddress(''));
      dispatch(setWalletType(''));
    }

    if (wallet === 'WalletConnect') {
      await walletConnectProvider.disconnect();

      dispatch(setWalletAddress(''));
      dispatch(setWalletType(''));
    }

    if (wallet === 'CoinBase') {
      const { coinbaseWallet } = getCoinBaseProvider();
      await coinbaseWallet.disconnect();

      dispatch(setWalletAddress(''));
      dispatch(setWalletType(''));
    }

    window.location.reload();
  }, [dispatch]);

  return {
    web3Connect,
    web3Disconnect
  }
}

export default useWallet;