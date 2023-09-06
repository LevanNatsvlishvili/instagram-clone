import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { HeartLight } from '../assets/icons/Heart';
import { InstaLight } from '../assets/icons/Logo';
import { MessengerLight } from '../assets/icons/Messenger';
import { heightScale, widthScale } from '../common/const/resolutionScales';
import { user1, user2, user3, user4 } from '../assets/images/users';
import { PlusLight } from '../assets/icons/Plus';

const topbarIconsLinks = [
  { id: 0, icon: HeartLight },
  { id: 1, icon: MessengerLight },
];

const userStories = [
  { id: 0, img: user1, userName: 'chikamika1' },
  { id: 1, img: user2, userName: 'messiShmesi' },
  { id: 2, img: user3, userName: 'tuinctunc' },
  { id: 3, img: user4, userName: 'zomba' },
  { id: 4, img: user1, userName: 'jonthebond' },
  { id: 5, img: user2, userName: 'master' },
  { id: 6, img: user3, userName: 'trulala' },
  { id: 7, img: user4, userName: 'tancamanc' },
];

function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.topbar}>
          <Image source={InstaLight} />
          <View style={styles.topbarIconsWrapper}>
            {topbarIconsLinks.map((link) => (
              <Image key={link.id} style={styles.topbarIcon} source={link.icon} />
            ))}
          </View>
        </View>
        {/* <View style={styles.stories}></View> */}
        <ScrollView horizontal style={styles.storiesWrapper}>
          {userStories.map((userStory, index) => (
            <View style={[{ flex: 1 }, !!index && { marginLeft: widthScale(10) }]}>
              <View style={{ position: 'relative' }}>
                <LinearGradient
                  style={[styles.storiesGradientBorder]}
                  colors={['#FBAA47', '#D91A46', '#A60F93']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Image source={userStory.img} style={styles.storiesImage} />
                </LinearGradient>
                {!index && (
                  <View style={styles.yourStoryIconWhiteSpace}>
                    <View style={styles.yourStoryIcon}>
                      <Image source={PlusLight} />
                    </View>
                  </View>
                )}
              </View>

              <Text style={styles.yourStoryUsername}>{userStory.userName}</Text>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    paddingLeft: widthScale(20),
    paddingRight: widthScale(20),
    flex: 1,
    flexDirection: 'row',
  },
  topbarIconsWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  topbarIcon: {
    marginLeft: widthScale(25),
  },
  storiesGradientBorder: {
    height: heightScale(73),
    width: widthScale(73),
    borderRadius: widthScale(73) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  storiesImage: {
    height: heightScale(67),
    width: widthScale(67),
    borderRadius: widthScale(67) / 2,
  },
  storiesWrapper: {
    flex: 1,
    marginTop: heightScale(10),
    paddingLeft: widthScale(10),
    // flexDirection: 'row',
  },
  yourStoryIconWhiteSpace: {
    height: heightScale(28),
    width: widthScale(28),
    backgroundColor: '#fff',
    borderRadius: widthScale(28) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  yourStoryIcon: {
    height: heightScale(20),
    width: widthScale(20),
    borderColor: '#E5E5E5',
    backgroundColor: '#009BFB',
    borderRadius: widthScale(20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yourStoryUsername: {
    marginTop: heightScale(8),
    textAlign: 'center',
    fontSize: 12,
  },
});

export default App;
