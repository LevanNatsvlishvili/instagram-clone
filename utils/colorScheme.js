import { darkModeColors, lightModeColors } from 'common/const/colors';
import { Appearance } from 'react-native';

function isLightMode() {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'light';
}

export const lightMode = isLightMode();

export default lightMode ? lightModeColors : darkModeColors;
