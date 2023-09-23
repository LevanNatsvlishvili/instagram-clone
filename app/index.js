import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, Image } from 'react-native';
import { HeartLight } from 'assets/icons/Heart';
import { InstaLight } from 'assets/icons/Logo';
import { MessengerLight } from 'assets/icons/Messenger';
import { heightScale, widthScale } from 'utils/resolutionScales';
import { user1, user2, user3, user4 } from 'assets/images/users';
import axios from 'axios';
import Story from 'components/components/Story';
import Post from 'components/components/Post';
import colorScheme from 'utils/colorScheme';

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

const YOUR_ACCESS_KEY = 'AxJ4m-bkuvGcdpwreV32S5WTqtzsWoSsOAVJz1olwuk';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://api.unsplash.com/photos?per_page=${3}`, {
          headers: {
            'Accept-Version': 'v1',
            Authorization: `Client-ID ${YOUR_ACCESS_KEY}`,
          },
        });
        setPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();

    console.log('first');
  }, []);

  return (
    <ScrollView style={{ backgroundColor: colorScheme.background }}>
      <View style={styles.topbar}>
        <Image source={InstaLight} />
        <View style={styles.topbarIconsWrapper}>
          {topbarIconsLinks.map((link) => (
            <Image key={link.id} style={styles.topbarIcon} source={link.icon} />
          ))}
        </View>
      </View>
      <ScrollView horizontal style={styles.storiesWrapper}>
        {userStories.map((userStory, index) => (
          <Story size={73} isMainStory={!!index} username={userStory.userName} img={userStory.img} />
        ))}
      </ScrollView>

      {posts.map((post) => {
        return (
          <View key={post.id} style={{ marginTop: 8 }}>
            <Story
              size={42}
              username={post.user?.instagram_username}
              img={{ uri: post.user?.profile_image.small }}
              isPostStory
            />

            <Post img={{ uri: post.urls?.full }} />
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topbar: {
    paddingLeft: widthScale(20),
    paddingRight: widthScale(20),
    flexDirection: 'row',
  },
  topbarIconsWrapper: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  topbarIcon: {
    marginLeft: widthScale(25),
  },
  storiesWrapper: {
    flex: 1,
    marginTop: heightScale(10),
    paddingLeft: widthScale(10),
    borderColor: 'red',
  },
});

export default App;
