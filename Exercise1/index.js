import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray'
  },
  redBox: {
    flexDirection: 'row',
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
  blueBox: {
    flex: 2,
    backgroundColor: 'blue'
  },
  greenBox: {
    flex: 1,
    backgroundColor: 'green'
  }
});

const Exercise1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
    </View>
  );
};

export default Exercise1;
