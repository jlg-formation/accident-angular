import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {

  endpoint = 'https://query.wikidata.org/sparql';
  constructor() { }

  async request(sparql: string) {
    const fullUrl = this.endpoint + '?query=' + encodeURIComponent(sparql);
    const headers = { Accept: 'application/sparql-results+json' };

    const body = await fetch(fullUrl, { headers });
    const json = await body.json();
    return json;
  }

}
