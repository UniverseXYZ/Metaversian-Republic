import { GoogleAuth, IdTokenClient } from 'google-auth-library';

const gcpClientsMap = new Map<string, IdTokenClient>();


export const getGcpClientForFunction = async (functionUrl: string): Promise<IdTokenClient> => {
  if (gcpClientsMap.has(functionUrl)) {
    return <IdTokenClient>gcpClientsMap.get(functionUrl);
  }
  const googleAuth = new GoogleAuth({
    credentials: {
      ...JSON.parse(process.env.ZOMBIE_GAME_CLOUDFUNCTION_INVOKER as any)
    },
  });
  try {
    const client = await googleAuth.getIdTokenClient(functionUrl);
    gcpClientsMap.set(functionUrl, client);

    return client;
  } catch (e) {
    throw new Error('Unable to obtain connection client.');
  }
};