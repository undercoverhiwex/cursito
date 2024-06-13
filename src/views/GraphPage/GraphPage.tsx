import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Text,
  Image,
  FlatList
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from '../../components/Button';
import {gql, useQuery} from '@apollo/client';

const GET_USERS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export const GraphPage = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_USERS, { variables: {page: 1, perPage: 50}, fetchPolicy: 'network-only', });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log({data});

  if (error) {
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <Button onPress={() => navigation.goBack()}>
          <Button.Label>Ocurrio un error -> Volver</Button.Label>
        </Button>
    </SafeAreaView>
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.row} key={index.toString()}>
          <Image source={{ uri: item.photo }} height={20} width={20} />
          <Text style={styles.rowLabel}>{item.name}</Text>
        </View>
    )
  }

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {loading && <ActivityIndicator />}
      {!loading && <FlatList data={data?.locations} renderItem={renderItem} />}
      {!loading && (
        <Button onPress={() => navigation.goBack()}>
          <Button.Label>Volver</Button.Label>
        </Button>
      )}
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
  row: {
    width: '100%',
    height: 50,
    backgroundColor: '#2980b9',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection:'row'
  },
  rowLabel: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  }
});
