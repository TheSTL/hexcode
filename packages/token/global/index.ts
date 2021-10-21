import { color, ColorObject } from './color';
import { space, Space } from './spacing';
import { other, Other } from './other'

export interface globalTokenObject extends Other {
  color: ColorObject,
  space: Space,
}

export const globalToken: globalTokenObject = {
  color,
  space,
  ...other,
};