import { property, graphQl, query } from '@graphite/decorators';

@graphQl
class Todo {
  @property('String | required')
  name;

  @property('Boolean')
  status = false;

  @query()
  todo() {
    return [{
      name: 'To do homework 1',
      status: false,
    },
    {
      name: 'To do homework 2',
      status: false,
    },
    ];
  }
}

export default new Todo();
