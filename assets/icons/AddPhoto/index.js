import { lightMode } from 'utils/colorScheme';

import Light from './add-photo-light.svg';
import Dark from './add-photo-dark.svg';

const AddPhoto = lightMode ? Light : Dark;

export { AddPhoto };
