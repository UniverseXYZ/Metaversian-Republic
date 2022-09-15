import request from "graphql-request";
import { GET_MINTED_QUERY, GET_USER_MINTED_QUERY } from "utils/queries/deviantsQueries";
import { getPolymorphsFacesCount, getPolymorphsV2Count } from "./polymorphs.helpers";

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
  const polyMorphsV2Count = await getPolymorphsV2Count(walletAddress);
  const polymorphsFacesCount = await getPolymorphsFacesCount(walletAddress);

  return (polyMorphsV2Count + polymorphsFacesCount) - mintedDeviantsCount;
}