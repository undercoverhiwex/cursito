import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Search} from '../../components/Search';
import api from '../../http/fetch';
import Button from '../../components/Button';
import {useCounter} from '../../hooks/useCounter';

export const FirstSteps = ({navigation}) => {
  const {increment, decrement, counter} = useCounter(10);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.text} testID="counter-label">
        {counter}
      </Text>

      <Button onPress={increment} testID="counter-button">
        <Button.Icon name="plus" size={30} color="#dfe6e9" />
      </Button>

      <Button onPress={decrement}>
        {/* <Button.Icon name="minus" size={30} color="#dfe6e9" /> */}
        <Button.Label>Contador</Button.Label>
      </Button>

      <Button onPress={() => navigation.goBack()}>
        <Button.Label>Volver</Button.Label>
      </Button>

      <Search onPress={api.get} />

      <FlatList
        renderItem={({item, index}) => {
          return (
            <Button.Icon
              name={item}
              size={30}
              color="#000"
              key={index.toString()}
            />
          );
        }}
        data={['plus', 'minus', 'comment', 'search']}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
  },
  text: {
    fontSize: 30,
    marginBottom: 30,
  },
  button: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7675',
    borderRadius: 20,
    marginBottom: 30,
  },
  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#dfe6e9',
    borderRadius: 20,
    borderColor: '#000000',
    paddingHorizontal: 20,
  },
});
