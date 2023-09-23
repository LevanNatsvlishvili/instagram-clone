import { Tabs } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Home, HomeClicked } from 'assets/icons/Home';
import { SearchClicked, Search } from 'assets/icons/Search';
import { AddPhoto } from 'assets/icons/AddPhoto';
import { Heart, HeartClicked } from 'assets/icons/Heart';
import colorScheme from 'utils/colorScheme';
import { heightScale } from 'utils/resolutionScales';
import Story from 'components/components/Story';
import { user1 } from 'assets/images/users';
import { Profile, ProfileClicked } from 'assets/icons/Profile';

const routes = [
  {
    id: '1',
    name: 'index',
    icon: Home,
    iconFocused: HomeClicked,
    url: '/',
  },
  {
    id: '2',
    name: 'search',
    icon: Search,
    iconFocused: SearchClicked,
    url: '/search',
  },
  {
    id: '3',
    name: 'add',
    icon: AddPhoto,
    url: '/add',
  },
  {
    id: '4',
    name: 'notifications',
    icon: Heart,
    iconFocused: HeartClicked,
    url: '/notifications',
  },
  {
    id: '5',
    name: 'profile',
    // icon: AddPhotoLight,
    icon: Profile,
    iconFocused: ProfileClicked,
    url: '/profile',
  },
];

function _layout() {
  console.log(Tabs);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colorScheme.background }}>
      <Tabs
        screenOptions={{
          // tabBarActiveTintColor: Colors.orange.default,
          tabBarStyle: {
            height: heightScale(85),
            borderWidth: 1,
            borderTopColor: colorScheme.background,
            borderRightColor: colorScheme.background,
            borderLeftColor: colorScheme.background,
            borderBottomColor: colorScheme.background,
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
              tabBarIcon: ({ focused }) => {
                if (route.iconFocused && focused) return <route.iconFocused height={28} width={28} />;
                if (route.icon && !focused) return <route.icon height={28} width={28} />;
                return <Story size={28} isPostStory img={user1} />;
              },
              href: route.url,
            }}
          />
        ))}
      </Tabs>
    </SafeAreaView>
  );
}

export default _layout;
