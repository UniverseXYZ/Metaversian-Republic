import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const ids = <number[]>req.body;
  for (let i = 0; i < ids.length; i++) {
    fetch(`https://us-central1-polymorphmetadata.cloudfunctions.net/deviants-images-test?id=${ids[i]}`, {});
  }

  res.send({});
}

export default handler;