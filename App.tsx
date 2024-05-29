/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Search} from './components/Search';
import api from './http/fetch';

function App(): React.JSX.Element {
  const [counter, setCounter] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePress = () => setCounter(curr => curr + 1);

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.text} testID="counter-label">
        {counter}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        testID="counter-button">
        <Icon name="plus" size={30} color="#dfe6e9" />
      </TouchableOpacity>

      <Search onPress={api.get} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default App;
