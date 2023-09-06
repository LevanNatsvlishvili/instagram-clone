import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const widthScale = (size) => (width / guidelineBaseWidth) * size;
const heightScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) => size + (widthScale(size) - size) * factor;

function computeImageDimensions(imgWidth, imgHeight) {
  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight = Dimensions.get('window').height;

  let newWidth, newHeight;

  // Landscape
  if (imgWidth > imgHeight) {
    newWidth = deviceWidth;
    newHeight = (imgHeight / imgWidth) * deviceWidth;

    // Ensure we don't exceed device's height
    if (newHeight > deviceHeight) {
      newHeight = deviceHeight;
      newWidth = (imgWidth / imgHeight) * deviceHeight;
    }
  }
  // Portrait or Square
  else {
    newHeight = deviceHeight;
    newWidth = (imgWidth / imgHeight) * deviceHeight;

    // Ensure we don't exceed device's width
    if (newWidth > deviceWidth) {
      newWidth = deviceWidth;
      newHeight = (imgHeight / imgWidth) * deviceWidth;
    }
  }

  return { width: newWidth, height: newHeight };
}

export { widthScale, heightScale, moderateScale, computeImageDimensions };
