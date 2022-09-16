import { gql } from "graphql-request";

export const GET_MINTED_QUERY = gql`
query($walletAddress:String){
  mintedEntities{
    id
  }
}
`

export const GET_USER_MINTED_QUERY = gql`
query($walletAddress:String){
  mintedEntities(where:{minter:$walletAddress,discount:true}){
    id
  }
}
`;