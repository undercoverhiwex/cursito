/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistCache} from 'apollo3-cache-persist';

import {Main} from './src/navigator/Stack';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache,
});

function App(): React.JSX.Element {
  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
