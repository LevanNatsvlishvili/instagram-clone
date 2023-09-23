import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, SafeAreaView } from 'react-native';
import { HomeLight } from 'assets/icons/Home';
import { SearchLight } from 'assets/icons/Search';
import { AddPhotoLight } from 'assets/icons/AddPhoto';
import { HeartLight } from 'assets/icons/Heart';
import colorScheme from 'utils/colorScheme';
import { heightScale } from 'utils/resolutionScales';

const routes = [
  {
    id: '1',
    name: 'index',
    icon: HomeLight,
    url: '/',
  },
  {
    id: '2',
    name: 'search',
    icon: SearchLight,
    url: '/search',
  },
  {
    id: '3',
    name: 'add',
    icon: AddPhotoLight,
    url: '/add',
  },
  {
    id: '4',
    name: 'notifications',
    icon: HeartLight,
    url: '/notifications',
  },
  {
    id: '5',
    name: 'profile',
    icon: AddPhotoLight,
    url: '/profile',
  },
];

function _layout() {
  console.log(Tabs);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors.orange.default,
          tabBarStyle: {
            height: heightScale(85),
            borderWidth: 1,
            borderTopColor: colorScheme.background,
            backgroundColor: colorScheme.background,
          },
        }}
      >
        {routes.map((route) => (
          <Tabs.Screen
            name={route.name}
            key={route.id}
            options={{
              title: '',
              headerShown: false,
              tabBarIcon: () => <Image style={styles.navbarIcon} source={route.icon} />,
              href: route.url,
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navbarIcon: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 0,
  },
});

export default _layout;
