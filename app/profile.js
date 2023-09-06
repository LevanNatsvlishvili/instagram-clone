import { Link } from 'expo-router';
import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

function App() {
  console.log('second');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
