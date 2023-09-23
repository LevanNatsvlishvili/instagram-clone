import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Heart } from 'assets/icons/Heart';
import { heightScale, widthScale } from 'utils/resolutionScales';
import Comment from 'assets/icons/Comment';

function Post(props) {
  const { img } = props;
  return (
    <View style={{ flex: 1 }}>
      <Image style={{ height: heightScale(450), flex: 1 }} source={img} />
      <View style={styles.actions}>
        <Heart width={22} height={22} style={styles.actionsIcon} />
        <Comment width={22} height={22} style={styles.actionsIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    paddingLeft: widthScale(10),
    paddingRight: widthScale(10),
    marginTop: heightScale(8),
    marginBottom: heightScale(8),
    flex: 1,
    flexDirection: 'row',
  },
  actionsIcon: {
    marginRight: widthScale(16),
  },
});

export default Post;
