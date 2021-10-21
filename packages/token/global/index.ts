import { color, ColorObject } from './color';
import { space, Space } from './spacing';
import { other, Other } from './other'

export interface globalTokenObject {
  color: ColorObject,
  space: Space
}

export const globalToken: globalTokenObject = {
  color,
  space,
  ...other,
};