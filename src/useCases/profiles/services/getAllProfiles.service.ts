/* eslint-disable no-underscore-dangle */
import { elasticsearch } from '../../../client/elasticsearch';

export const getAllProfilesService = async (from: number, size: number) => {
  const { client } = elasticsearch;
  const response = await client
    .search({
      index: 'profiles',
      from,
      size,
      q: 'testimonials$teste',
    })
    .catch((err) => console.error('Elastic Error: ', err));

  const total = response?.hits.total as unknown as {
    value: number;
    relation: string;
  };

  return {
    totalPages: Math.ceil(total.value / size),
    data: response?.hits.hits.map((hit) => hit._source),
  };
};

// from e size para paginação
// q = query
