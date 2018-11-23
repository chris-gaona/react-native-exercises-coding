import React, { Component } from 'react';
import { SafeAreaView, FlatList, Text, StatusBar, ActivityIndicator, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  person: {
    padding: 10,
  },
  name: {
    fontSize: 20
  },
  birth: {
    fontSize: 18,
  },
  border: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  }
});

class Challenge3 extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error));
  }

  Person({ name, birth_year }) {
    return (
      <View style={styles.person}>
        <Text style={styles.name}>{ name }</Text>
        <Text>Birth Year: { birth_year }</Text>
      </View>
    )
  }

  Separator() {
    return <View style={styles.border} />
  }

  render() {
    const { people } = this.state

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        { !people.length ?
          (
            <ActivityIndicator size="large" color="gray" style={{flex: 1}} />
          ) :
          (
            <FlatList
              data={people}
              renderItem={({ item }) => this.Person(item)}
              keyExtractor={(item) => item.name}
              ItemSeparatorComponent={this.Separator}
              style={{borderTopColor: 'gray', borderTopWidth: 1, marginTop: 15}}
            />
          )
        }
      </SafeAreaView>
    )
  }
}

export default Challenge3;
