import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikidataService {


  constructor() { }

  request(sparql: string): Promise<any[]> {
    return new Promise(resolve => resolve([2, 4]));
  }

}
