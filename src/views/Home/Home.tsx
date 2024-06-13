import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Button from '../../components/Button';

export const Home: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => navigation.navigate('First Steps')}>
        <Button.Label>First Steps</Button.Label>
      </Button>
      <Button onPress={() => navigation.navigate('GraphQL')}>
        <Button.Label>GraphQL</Button.Label>
      </Button>
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
});
