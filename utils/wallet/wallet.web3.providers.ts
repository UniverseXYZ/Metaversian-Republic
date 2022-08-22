import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const walletConnectProvider = new WalletConnectProvider({
  infuraId: "1745e014e2ed4047acdaa135e869a11b"
});

export const getCoinBaseProvider = () => {
  const coinbaseWallet = new CoinbaseWalletSDK({
    appLogoUrl: '@app/assets/images/Logo.svg',
    appName: 'Metaversian republic',
    darkMode: false
  });

  const coinbaseWalletProvider = coinbaseWallet.makeWeb3Provider('https://mainnet.infura.io/v3/1745e014e2ed4047acdaa135e869a11b', 1);

  return coinbaseWalletProvider;
}