import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

export const walletConnectProvider = new WalletConnectProvider({
  infuraId: <string>process.env.INFURAID
});

export const walletConnectWeb3Provider = new providers.Web3Provider(walletConnectProvider, 'any');

export const getCoinBaseProvider = () => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appLogoUrl: '@app/assets/images/Logo.svg',
    appName: 'Metaversian republic',
    darkMode: false
  });

  const coinbaseWalletProvider = coinbaseWallet.makeWeb3Provider(`https://mainnet.infura.io/v3/${process.env.INFURAID}`, 1);
  const web3WrapperProvider = new providers.Web3Provider(<any>coinbaseWalletProvider, 'any')

  return { coinbaseWallet, coinbaseWalletProvider, web3WrapperProvider };
}
