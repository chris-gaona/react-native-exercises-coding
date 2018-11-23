import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
});

/* USES KeyboardAvoidingView */
// export const Container = ({ children }) => (
//   <SafeAreaView style={styles.container}>
//     <StatusBar barStyle="light-content" />
//     <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={14}>
//       {children}
//     </KeyboardAvoidingView>
//   </SafeAreaView>
// );

/* USES react-native-keyboard-aware-scroll-view */
export const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <KeyboardAwareScrollView>
      {children}
    </KeyboardAwareScrollView>
  </SafeAreaView>
);
