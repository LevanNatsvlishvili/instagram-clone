import { lightMode } from 'utils/colorScheme';

import Light from './heart-light.svg';
import Dark from './heart-dark.svg';
import ClickedLight from './heart-clicked-light.svg';
import ClickedDark from './heart-clicked-dark.svg';

const Heart = lightMode ? Light : Dark;
const HeartClicked = lightMode ? ClickedLight : ClickedDark;

export { Heart, HeartClicked };
