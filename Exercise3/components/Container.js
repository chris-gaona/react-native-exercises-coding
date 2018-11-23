import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView, Keyboard } from 'react-native';
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

// /* USES Keyboard listeners */
// class Container extends Component {
//   componentDidMount() {
//     this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
//     this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
//   }

//   componentWillUnmount () {
//     this.keyboardDidShowListener.remove();
//     this.keyboardDidHideListener.remove();
//   }

//   _keyboardDidShow () {
//     // alert('Keyboard Shown');
//   }

//   _keyboardDidHide () {
//     // alert('Keyboard Hidden');
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         {this.props.children}
//       </SafeAreaView>
//     );
//   }
// }

// export { Container }
