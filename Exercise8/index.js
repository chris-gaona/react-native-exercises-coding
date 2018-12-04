import React from 'react';
import { View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import { Ionicons } from '@expo/vector-icons'

const GenericScreen = ({ navigation, title, Name }) => (
  <View style={{ flex: 1 }}>
    <Button
      title={`Open ${title}+1`}
      onPress={() => navigation.navigate(`${Name}+1`)}
    />
    <Button
      title="Open Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

const GenericStack = (Name, title) => (
  createStackNavigator({
    [Name]: {
      screen: (props) => <GenericScreen {...props} title={title} Name={Name} />,
      navigationOptions: ({ navigation }) => ({
        headerTitle: title,
        headerLeft: (
          <Button
            title="Drawer"
            onPress={() => navigation.openDrawer()}
          />
        )
      }),
    },
    [`${Name}+1`]: {
      screen: View,
      navigationOptions: {
        headerTitle: `${title}+1`
      },
    },
  })
)

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: GenericStack('Home', 'Home'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={28} color={tintColor} />
      )
    }
  },
  Browse: {
    screen: GenericStack('Browse', 'Browse'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-browsers" size={28} color={tintColor} />
      )
    }
  },
  Search: {
    screen: GenericStack('Search', 'Search'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-search" size={28} color={tintColor} />
      )
    }
  },
  Radio: {
    screen: GenericStack('Radio', 'Radio'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-radio" size={28} color={tintColor} />
      )
    }
  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: TabNavigator,
  'Your Daily Mix': {
    screen: GenericStack('Your Daily Mix', 'Your Daily Mix')
  },
  'Recently Played': {
    screen: GenericStack('Recently Played', 'Recently Played')
  },
  Songs: {
    screen: GenericStack('Songs', 'Songs')
  },
  Albums: {
    screen: GenericStack('Albums', 'Albums')
  },
  Artists: {
    screen: GenericStack('Artists', 'Artists')
  },
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: View,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Settings',
      headerRight: (
        <Button
          title="Close"
          onPress={() => navigation.goBack(null)}
        />
      )
    }),
  },
});

const RootNavigator = createStackNavigator({
  Primary: {
    screen: DrawerNavigator,
  },
  Setting: {
    screen: SettingsStack,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Settings',
      headerRight: (
        <Button
          title="Close"
          onPress={() => navigation.goBack(null)}
        />
      )
    })
  }
}, {
  mode: 'modal',
  headerMode: 'none',
})

export default createAppContainer(RootNavigator);
