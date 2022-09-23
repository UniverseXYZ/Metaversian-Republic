import WalletConnectProvider from "@walletconnect/web3-provider";
import { Contract, providers, Signer } from "ethers";
import { formatEther, getAddress } from "ethers/lib/utils";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { setShowWrongNetwork } from "utils/app/app.slice";
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
    let balance;
    if (wallet === METAMASK_PROVIDER) {
      dispatch(setWalletType('Metamask'));

      const chainId = (window as any).ethereum.networkVersion
      if (chainId != parseInt(process.env.DEFAULT_NETWORK_HEX as string, 16)) {
        dispatch(setShowWrongNetwork(true));
        return;
      }

      const [address] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
        params: []
      });

      balance = formatEther(await (window as any).ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }));

      walletAddress.current = address;
      setListeners((window as any).ethereum, 'Metamask');
    }

    if (wallet === WALLET_CONNECT_PROVIDER) {
      [walletAddress.current] = <string[]>await walletConnectProvider.enable();

      balance = formatEther(await walletConnectProvider.request({
        method: 'eth_getBalance',
        params: [walletAddress.current, 'latest']
      }));

      setListeners(walletConnectProvider, 'WalletConnect');
      dispatch(setWalletType('WalletConnect'));
    }

    if (wallet === COINBASE_PROVIDER) {
      dispatch(setWalletType('CoinBase'));

      const { coinbaseWalletProvider, web3WrapperProvider } = getCoinBaseProvider();

      const chainId = coinbaseWalletProvider.chainId;
      if (chainId != process.env.DEFAULT_NETWORK_HEX) {
        dispatch(setShowWrongNetwork(true));
        return;
      }

      const [address] = await coinbaseWalletProvider.request({
        method: 'eth_requestAccounts',
        params: []
      });

      balance = formatEther(await coinbaseWalletProvider.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }));

      walletAddress.current = address;
      setListeners(web3WrapperProvider, 'CoinBase');
    }

    const discountDeviantsCount = await getDiscountedDeviants(<string>walletAddress.current);
    dispatch(setDiscountDeviantsCount(discountDeviantsCount));
    dispatch(setWalletAddress(getAddress(<string>walletAddress.current)));

    const polymorphsCount = await getPolymorphsCount(<string>walletAddress.current);
    dispatch(setBalance(<string>balance));
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

  const setListeners = useCallback((provider: providers.Web3Provider | WalletConnectProvider, walletType: string) => {
    provider.on("accountsChanged", () => {
      web3Connect(walletType);
    });
    provider.on("chainChanged", (chainHex: string) => {
      if (chainHex != process.env.DEFAULT_NETWORK_HEX) {
        dispatch(setShowWrongNetwork(true));
      } else {
        dispatch(setShowWrongNetwork(false));
      }

    });
    provider.on("disconnect", () => {
      web3Disconnect(walletType);
    });
  }, [dispatch, web3Connect, web3Disconnect]);

  const changeNetwork = useCallback(async () => {
    if (walletType === METAMASK_PROVIDER) {
      await (window.ethereum as any).request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: process.env.DEFAULT_NETWORK_HEX }],
      });
    }

    if (walletType === WALLET_CONNECT_PROVIDER) {
      await walletConnectProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: process.env.DEFAULT_NETWORK_HEX }],
      });
    }

    if (walletType === COINBASE_PROVIDER) {
      const { coinbaseWalletProvider } = getCoinBaseProvider();
      await coinbaseWalletProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: process.env.DEFAULT_NETWORK_HEX }],
      });
    }

    dispatch(setShowWrongNetwork(false));
  }, [walletType]);

  const getBalance = useCallback(async (address: string) => {
    let balance;
    if (walletType === METAMASK_PROVIDER) {
      balance = await formatEther(await (window as any).ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }));
    }

    if (walletType === WALLET_CONNECT_PROVIDER) {
      balance = await formatEther(await walletConnectProvider.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }));
    }

    if (walletType === COINBASE_PROVIDER) {
      const { coinbaseWalletProvider } = getCoinBaseProvider();
      balance = await formatEther(await coinbaseWalletProvider.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      }));
    }

    dispatch(setBalance(<string>balance));
    return balance;
  }, [walletType, dispatch]);

  return {
    web3Connect,
    web3Disconnect,
    callContract,
    changeNetwork,
    getBalance
  }
}

export default useWallet;
