/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {Main} from './src/navigator/Stack';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
});

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
