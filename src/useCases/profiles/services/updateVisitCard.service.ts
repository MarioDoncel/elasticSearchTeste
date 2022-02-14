import { elasticsearch } from '../../../client/elasticsearch';
import { IVisitCard } from '../../../interfaces/visit-card';

export const updateVisitCardService = async (
  newVisitCard: Partial<IVisitCard>
) => {
  const { client } = elasticsearch;
  return client.updateByQuery({
    index: 'profiles',
    type: 'type_elastic_profiles',
    query: {
      match: {
        industry: 'new',
      },
    },
  });
};
