export const shortenEthereumAddress = (address) =>
  `${address?.substring(0, 4)}...${address?.substring(address?.length - 3, address?.length)}`;