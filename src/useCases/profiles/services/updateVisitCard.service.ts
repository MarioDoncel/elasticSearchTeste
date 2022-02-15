import { elasticsearch } from '../../../client/elasticsearch';
import { IVisitCard } from '../../../interfaces/visit-card';

export const updateVisitCardService = async (
  newVisitCard: Partial<IVisitCard>
) => {
  const { client } = elasticsearch;
  if (!newVisitCard.id) throw new Error();

  return client.update({
    index: 'profiles',
    type: 'type_elastic_profiles',
    id: newVisitCard.id,
    body: {
      doc: newVisitCard,
    },
  });
};
