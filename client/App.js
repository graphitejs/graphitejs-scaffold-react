import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const networkInterface = createNetworkInterface('http://localhost:4000/graphql');
const client = new ApolloClient({ networkInterface, dataIdFromObject: r => r.id });

ReactDOM.render(
  <ApolloProvider client={client}>
    <div>
      <h1> GraphiteJS </h1>
    </div>
  </ApolloProvider>,
  document.getElementById('app')
);
