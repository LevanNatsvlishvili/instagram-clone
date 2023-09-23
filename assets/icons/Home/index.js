import { lightMode } from 'utils/colorScheme';

import Light from './home-light.svg';
import Dark from './home-dark.svg';
import ClickedLight from './home-clicked-light.svg';
import ClickedDark from './home-clicked-dark.svg';

const Home = lightMode ? Light : Dark;
const HomeClicked = lightMode ? ClickedLight : ClickedDark;

export { Home, HomeClicked };
