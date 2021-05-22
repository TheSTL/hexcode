import { color, Color } from './color';
import { space, Space } from './spacing';

interface Global {
  color: Color,
  space: Space
}

const global: Global = {
  color,
  space,
};

export default global;