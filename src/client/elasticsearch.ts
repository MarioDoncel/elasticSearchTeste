import elasticSearch from 'elasticsearch';

class ElasticSearch {
  public client: elasticSearch.Client = new elasticSearch.Client({
    host: 'localhost:9200',
    log: 'trace',
  });
}

export const elasticsearch = new ElasticSearch();
