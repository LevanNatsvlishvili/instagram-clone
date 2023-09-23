import { lightMode } from 'utils/colorScheme';

import Light from './search-light.svg';
import Dark from './search-dark.svg';
import ClickedLight from './search-clicked-light.svg';
import ClickedDark from './search-clicked-dark.svg';

const Search = lightMode ? Light : Dark;
const SearchClicked = lightMode ? ClickedLight : ClickedDark;

export { Search, SearchClicked };
