import { lightMode } from 'utils/colorScheme';

import Light from './profile-light.svg';
import Dark from './profile-dark.svg';
import ClickedLight from './profile-clicked-light.svg';
import ClickedDark from './profile-clicked-dark.svg';

const Profile = lightMode ? Light : Dark;
const ProfileClicked = lightMode ? ClickedLight : ClickedDark;

export { Profile, ProfileClicked };
