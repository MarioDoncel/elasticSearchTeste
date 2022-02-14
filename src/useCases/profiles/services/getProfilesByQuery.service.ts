import { elasticsearch } from '../../../client/elasticsearch';

export const getProfilesByQueryService = async () => {
  const { client } = elasticsearch;
  return client.search({
    index: 'profiles',
    body: {
      query: {
        match: {
          industry: 'new',
        },
      },
    },
  });
};

// encontra o Mock3, funciona como um LIKE porem apenas com palavras completas
