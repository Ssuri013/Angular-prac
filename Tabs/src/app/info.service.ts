import { Injectable } from '@angular/core';
import { Opt } from './Opt';

const OPTS: Opt[] = [{
  name: 'Services',
  id: 1,
  routerLink: '/services'
},
{
  name: 'Cost',
  id: 2,
  routerLink: '/cost'
},
{
  name: 'Usage',
  id: 3,
  routerLink: './usage'
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
