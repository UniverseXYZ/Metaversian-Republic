import { Contract, providers, Signer } from "ethers";
import { formatEther, getAddress } from "ethers/lib/utils";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "utils/dispatch";
import { getDiscountedDeviants } from "./deviants.helpers";
import { getPolymorphsCount } from "./polymorphs.helpers";
import { COINBASE_PROVIDER, METAMASK_PROVIDER, WALLET_CONNECT_PROVIDER } from "./wallet.d";
import { selectWalletType, setBalance, setDiscountDeviantsCount, setPolymorphsCount, setWalletAddress, setWalletType } from "./wallet.slice";
import { getCoinBaseProvider, walletConnectProvider, walletConnectWeb3Provider } from "./wallet.web3.providers";

export const useWallet = () => {
  const dispatch = useAppDispatch();
  let walletAddress = useRef<string>();
  const walletType = useSelector(selectWalletType);

  const web3Connect = useCallback(async (wallet: string) => {
    const provider = new providers.InfuraProvider('homestead', process.env.INFURAID);

    if (wallet === METAMASK_PROVIDER) {
      const [address] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
        params: []
      });
      walletAddress.current = address;
      dispatch(setWalletType('Metamask'));
    }

    if (wallet === WALLET_CONNECT_PROVIDER) {
      [walletAddress.current] = await walletConnectProvider.enable();
      dispatch(setWalletType('WalletConnect'));
    }

    if (wallet === COINBASE_PROVIDER) {
      const { coinbaseWalletProvider } = getCoinBaseProvider();
      const [address] = await coinbaseWalletProvider.request({
        method: 'eth_requestAccounts',
        params: []
      });
      walletAddress.current = address;
      dispatch(setWalletType('CoinBase'));
    }

    const discountDeviantsCount = await getDiscountedDeviants(<string>walletAddress.current);
    dispatch(setDiscountDeviantsCount(discountDeviantsCount));
    dispatch(setWalletAddress(getAddress(<string>walletAddress.current)));

    const balance = formatEther(await provider.getBalance(<string>walletAddress.current));

    const polymorphsCount = await getPolymorphsCount(<string>walletAddress.current);
    dispatch(setBalance(balance));
    dispatch(setPolymorphsCount(polymorphsCount));
  }, [dispatch]);

  const web3Disconnect = useCallback(async (wallet: string) => {
    if (wallet === WALLET_CONNECT_PROVIDER) {
      await walletConnectProvider.disconnect();
    }

    if (wallet === COINBASE_PROVIDER) {
      const { coinbaseWallet } = getCoinBaseProvider();
      await coinbaseWallet.disconnect();
    }

    dispatch(setWalletAddress(''));
    dispatch(setWalletType(''));

    window.location.reload();
  }, [dispatch]);

  const callContract = useCallback(async (abi: any, methodName: string, ...params: Parameters<any>) => {
    let contract;
    let signer;
    const contractAddress = process.env.DEVIANTS_CONTRACT_ADDRESS;

    if (walletType === METAMASK_PROVIDER) {
      const metamaskWeb3Provider = new providers.Web3Provider(<any>window.ethereum, 'any');
      signer = await metamaskWeb3Provider.getSigner();
      contract = new Contract(<string>contractAddress, abi, metamaskWeb3Provider);
    }

    if (walletType === WALLET_CONNECT_PROVIDER) {
      signer = await walletConnectWeb3Provider.getSigner();
      contract = new Contract(<string>contractAddress, abi, walletConnectWeb3Provider);
    }

    if (walletType === COINBASE_PROVIDER) {
      const { web3WrapperProvider } = getCoinBaseProvider();
      signer = await web3WrapperProvider.getSigner();
      contract = new Contract(<string>contractAddress, abi, <any>web3WrapperProvider);
    }

    return (contract as Contract).connect(<Signer>signer)[methodName](...params);
  }, [walletType]);

  return {
    web3Connect,
    web3Disconnect,
    callContract
  }
}

export default useWallet;