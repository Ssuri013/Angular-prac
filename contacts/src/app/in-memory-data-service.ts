
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const contacts = [{
      name: 'Shubham',
      number: '9041908421',
      id: '1'
    },
    {
      name: 'Shubha',
      number: '9041908421',
      id: '2'
    },
    {
      name: 'Shubh',
      number: '9041908421',
      id: '3'
    }
    ];
    return {contacts};
  }
}
