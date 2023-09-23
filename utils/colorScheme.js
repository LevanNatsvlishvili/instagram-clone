import { darkModeColors, lightModeColors } from 'common/const/colors';
import { Appearance } from 'react-native';

function isLightMode() {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'light';
}

export const lightMode = isLightMode();

function handleColorSchemeChange({ colorScheme }) {
  if (colorScheme === 'dark') {
    console.log('Switched to dark mode.');
  } else {
    console.log('Switched to light mode.');
  }
}

export default lightMode ? lightModeColors : darkModeColors;
