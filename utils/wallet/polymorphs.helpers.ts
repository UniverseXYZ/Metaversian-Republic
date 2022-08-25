import request from "graphql-request";
import { GET_POLYMORPHS_QUERY } from "utils/queries/polymorphsQueries";

export const getPolymorphsCount = async (walletAddress: string) => {
  const theGraphV1Response = (await request(<string>process.env.THE_GRAPH_V1_URL, GET_POLYMORPHS_QUERY, {
    walletAddress,
  }));
  const theGraphV2Response = (await request(<string>process.env.THE_GRAPH_V2_URL, GET_POLYMORPHS_QUERY, {
    walletAddress,
  }));

  return theGraphV1Response.transferEntities.length + theGraphV2Response.transferEntities.length;
};