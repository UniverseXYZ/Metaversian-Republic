import { utils } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as Web3Token from 'web3-token';
import { getGcpClientForFunction } from '../../utils/gcp.service';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const token = <string>req.headers.authorization;
  const { address, body } = await Web3Token.verify(token);
  const client = await getGcpClientForFunction(<string>process.env.GET_ID_URL);
  const walletAddressCheckSum = utils.getAddress(address);

  const response = await client.request({
    url: <string>process.env.GET_ID_URL,
    method: 'GET',
    params: {
      walletAddress: walletAddressCheckSum
    },
    retry: true
  })
    .then(response => response.data);

  res.send(response);
}

export default handler;