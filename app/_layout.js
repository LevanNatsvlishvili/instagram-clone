import { Tabs } from 'expo-router';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { HomeLight } from '../assets/icons/Home';
import { SearchLight } from '../assets/icons/Search';
import { AddPhotoLight } from '../assets/icons/AddPhoto';
import { HeartLight } from '../assets/icons/Heart';
import { heightScale } from '../common/const/resolutionScales';

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
    url: '/search',
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
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors.orange.default,
        tabBarStyle: {
          height: heightScale(81),
          borderWidth: 1,
          borderColor: '#000',
          // borderTopColor: '#000',
          // borderBottomColor: '#000',
          borderBottomColor: 'red',
          // borderRadius: 50,
          // borderColor: Colors.orange.default,
          borderTopColor: '#C9C9C9',
          // backgroundColor: Colors.white.default,
          borderRightColor: '#fff',
          borderLeftColor: '#fff',
        },
        // tabBarLabelStyle: {
        //   fontSize: 12,
        //   fontWeight: 'bold',
        //   marginBottom: 10,
        // },
      }}
    >
      {routes.map((route) => (
        <Tabs.Screen
          name={route.name}
          options={{
            title: '',
            headerShown: false,
            tabBarIcon: () => <Image style={styles.navbarIcon} source={route.icon} />,
            href: route.url,
          }}
        />
      ))}
    </Tabs>
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
