import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightScale, widthScale } from 'utils/resolutionScales';
import { PlusLight } from 'assets/icons/Plus';
import colorScheme from 'utils/colorScheme';

function Story(props) {
  const { size, isMainStory, isPostStory, username, img } = props;
  return (
    <View style={[{ flex: 1 }, !!isMainStory && { marginLeft: widthScale(10) }, !!isPostStory && styles.header]}>
      <View style={{ position: 'relative' }}>
        <LinearGradient
          style={[styles.gradientBorder, { height: heightScale(size), width: widthScale(size) }]}
          colors={['#FBAA47', '#D91A46', '#A60F93']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image source={img} style={[styles.image, { height: heightScale(size - 6), width: widthScale(size - 6) }]} />
        </LinearGradient>

        {!isPostStory && !isMainStory && (
          <View style={styles.addNewStoryIconWhiteSpace}>
            <View style={styles.addNewStoryIcon}>
              <Image source={PlusLight} />
            </View>
          </View>
        )}
      </View>

      <Text style={isPostStory ? styles.postStoryUsername : styles.username}>{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    height: heightScale(73),
    width: widthScale(73),
    borderRadius: widthScale(73) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    height: heightScale(67),
    width: widthScale(67),
    borderRadius: widthScale(67) / 2,
  },
  addNewStoryIconWhiteSpace: {
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
  addNewStoryIcon: {
    height: heightScale(20),
    width: widthScale(20),
    borderColor: '#E5E5E5',
    backgroundColor: '#009BFB',
    borderRadius: widthScale(20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: { marginTop: heightScale(8), textAlign: 'center', fontSize: 12, color: colorScheme.primary },
  postStoryUsername: { marginLeft: 6, fontWeight: 'bold', fontSize: 14, color: colorScheme.primary },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: widthScale(10),
    paddingRight: widthScale(10),
  },
});

export default Story;
