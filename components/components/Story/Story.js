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
          <View style={[styles.whitespace, { height: heightScale(size - 6), width: widthScale(size - 6) }]}>
            <Image
              source={img}
              style={[styles.image, { height: heightScale(size - 12), width: widthScale(size - 12) }]}
            />
          </View>
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
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    borderRadius: '50%',
  },
  whitespace: {
    backgroundColor: colorScheme.background,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addNewStoryIconWhiteSpace: {
    height: heightScale(26),
    width: widthScale(26),
    backgroundColor: colorScheme.background,
    borderRadius: '50%',
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
    borderRadius: '50%',
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
