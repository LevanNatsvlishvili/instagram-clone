import { lightMode } from 'utils/colorScheme';

import Light from './comment-light.svg';
import Dark from './comment-dark.svg';

const Comment = lightMode ? Light : Dark;

export default Comment;
