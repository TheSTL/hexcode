import { color, Color } from './color';
import { space, Space } from './spacing';

export interface Global {
  color: Color,
  space: Space
}

export const global: Global = {
  color,
  space,
};