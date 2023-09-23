import { lightMode } from 'utils/colorScheme';

import Light from './messenger-light.svg';
import Dark from './messenger-dark.svg';

const Messenger = lightMode ? Light : Dark;

export default Messenger;
