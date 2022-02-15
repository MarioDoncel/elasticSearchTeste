import { elasticsearch } from '../../../client/elasticsearch';

export const getProfilesByQueryService = async () => {
  const { client } = elasticsearch;
  return client.search({
    index: 'profiles',
    body: {
      query: {
        match: {
          testimonials: 'teste',
        },
      },
    },
  });
};

// encontra o Mock3, funciona como um LIKE porem apenas com palavras completas
//  index: 'profiles',

/*  Outro Exemplo */
// return client.search({
//   index: 'profiles',
//   body: {
//     query: {
//       match: {
//         id: '4',
//       },
//     },
//   },
