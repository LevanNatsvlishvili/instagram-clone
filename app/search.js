// import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// import { LogoDark } from '../assets/icons/Logo';
// import LogoDark from '../assets/icons/Logo/LogoDark.svg';

export default function Search() {
  // console.log(LogoDark);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <Link href={'/'}>Go to home</Link>
      {/* <Image
        source={{
          uri: Book,
        }}
        style={styles.image}
      /> */}
      {/* <Image
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      /> */}
      {/* <Book width={100} height={100} /> */}
      {/* <Book /> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
