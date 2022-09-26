import { gql } from "graphql-request";

export const GET_MINTED_QUERY = gql`
{
  mintedEntities(orderBy:tokenId,orderDirection:desc,first:1) {
    id
    minter
    tokenId
    discount
  }
}
`

export const GET_USER_MINTED_QUERY = gql`
query($walletAddress:String){
  users(where:{id:$walletAddress}){
    id
    mintedOverall
    mintedDiscounted
  }
}
`;