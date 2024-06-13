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
import {NetworkStatus, gql, useQuery} from '@apollo/client';

const GET_USERS = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        perPage
        hasNextPage
        currentPage
      }
      users {
        id
        name
        avatar {
          large
          medium
        }
        previousNames {
          name
          createdAt
          updatedAt
        }
      }
  }
  }
`;

export const GraphPage = ({navigation}) => {
  const {loading, error, data, fetchMore, refetch, networkStatus} = useQuery(GET_USERS, { variables: {page: 1, perPage: 50 }, fetchPolicy: 'network-only', });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const refreshing = networkStatus === NetworkStatus.refetch

  const onUpdate = (prev, { fetchMoreResult }) => {
    if (!fetchMoreResult) return prev
    const { pageInfo } = fetchMoreResult.Page
    const users = [
      ...prev.Page.users,
      ...fetchMoreResult.Page.users,
    ]
    return Object.assign({}, prev, {
      Page: {
        __typename: prev.Page.__typename,
        users,
        pageInfo: {
          "__typename": "PageInfo",
          ...pageInfo,
        }
      },
    })
  }

  const handleOnEndReached = () => {
    const nextPage = data?.Page.pageInfo?.currentPage + 1;
    console.log('Disparado', nextPage, data)
      return fetchMore({
        variables: {
          page: nextPage,
          perPage: 50
        },
        updateQuery: onUpdate,
      })
  }

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
          <Image source={{ uri: item.avatar.medium }} height={20} width={20} />
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
      {!loading && (
        <FlatList
          style={styles.list}
          data={data?.Page.users}
          renderItem={renderItem}
          onRefresh={refetch}
          refreshing={refreshing}
          onEndReachedThreshold={1}
          onEndReached={handleOnEndReached}
        />
  )}
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
  },
  list: {
    width: '100%',
    paddingHorizontal: 20
  }
});
