import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

type IProps = {
  onPress: (event: string) => void;
};

export const Search: React.FC<IProps> = ({onPress}) => {
  const [text, setText] = useState('');

  return (
    <View testID="search-component" style={styles.container}>
      <TextInput
        onChangeText={setText}
        value={text}
        style={styles.input}
        testID="search-input"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => onPress(text)}
        testID="search-button">
        <Icon name="search" size={30} color="#dfe6e9" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0984e3',
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
    marginBottom: 30,
  },
});
