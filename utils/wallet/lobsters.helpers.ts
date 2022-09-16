import request from "graphql-request";
import { GET_POLYMORPHS_OR_LOBSTERS_QUERY } from "utils/queries/polymorphsQueries";

export const getLobstersCount = async (walletAddress: string) => {
  const theGraphResponse = (await request(<string>process.env.THE_GRPH_LOBSTERS_URL, GET_POLYMORPHS_OR_LOBSTERS_QUERY, {
    walletAddress,
  }));

  return theGraphResponse.transferEntities.length;
}