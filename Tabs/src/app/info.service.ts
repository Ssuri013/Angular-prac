import { Injectable } from '@angular/core';
import { Opt } from './Opt';

const OPTS: Opt[] = [{
  name: 'Services',
  id: 1
},
{
  name: 'Health',
  id: 2
},
{
  name: 'More',
  id: 3
}
];

@Injectable()
export class InfoService {

  constructor() {

  }

   getOpts(): Promise<Opt[]> {
     return Promise.resolve(OPTS);
   }

   getOpt(id: number): Promise<Opt> {
    return this.getOpts()
               .then(opts => opts.find(opt => opt.id == id));
  }
}
