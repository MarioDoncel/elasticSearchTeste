import { elasticsearch } from '../../../client/elasticsearch';

export const getAllProfilesService = async (from: number, size: number) => {
  const { client } = elasticsearch;
  return client.search({
    index: 'profiles',
    from,
    size,
    q: 'industry$testNewIndustry',
  });
};

// from e size para paginação
// q = query
