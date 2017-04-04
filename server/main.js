import { graphql } from './config/default';
import { Graphite } from '@graphite/apollo-express';
import Todo from './models/Todo';

Graphite.graphQLServer({ graphql }, [ Todo ]);
