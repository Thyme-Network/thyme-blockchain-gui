import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.THYME]: IS_MAINNET ? 'XTH' : 'TXTH',
};
