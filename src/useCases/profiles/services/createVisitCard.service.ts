import { elasticsearch } from '../../../client/elasticsearch';
import { IVisitCard } from '../../../interfaces/visit-card';

export const createVisitCardService = async (visitCard: IVisitCard) => {
  const { client } = elasticsearch;
  return client.index<IVisitCard>({
    index: 'profiles',
    type: 'type_elastic_profiles',
    id: visitCard.id,
    body: visitCard,
  });
};

// index seria como a collection do mongo

// Criar o id com o id do Visit card
