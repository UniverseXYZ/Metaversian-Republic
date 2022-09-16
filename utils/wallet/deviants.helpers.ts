import request from "graphql-request";
import { GET_MINTED_QUERY, GET_USER_MINTED_QUERY } from "utils/queries/deviantsQueries";
import { getLobstersCount } from "./lobsters.helpers";
import { getPolymorphsCount, getPolymorphsFacesCount } from "./polymorphs.helpers";

export const getMintedDeviants = async () => {
  const theGraphResponse = (await request(<string>process.env.THE_GRAPH_DEVIANTS_URL, GET_MINTED_QUERY, undefined));

  return theGraphResponse.mintedEntities.length;
};

export const getUserMintedDeviants = async (walletAddress: string) => {
  const theGraphResponse = (await request(<string>process.env.THE_GRAPH_DEVIANTS_URL, GET_USER_MINTED_QUERY, {
    walletAddress
  }));

  return theGraphResponse.mintedEntities.length;
};

export const getDiscountedDeviants = async (walletAddress: string) => {
  const mintedDeviantsCount = await getUserMintedDeviants(walletAddress);
  const polyMorphsCount = await getPolymorphsCount(walletAddress);
  const polymorphsFacesCount = await getPolymorphsFacesCount(walletAddress);
  const lobstersCount = await getLobstersCount(walletAddress);

  return (polyMorphsCount + polymorphsFacesCount + lobstersCount) - mintedDeviantsCount;
}