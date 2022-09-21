export const getLink = () => {
  return process.env.NODE_ENV == 'development' ? "https://goerli.etherscan.io/tx/" : "https://etherscan.io/tx/";
}