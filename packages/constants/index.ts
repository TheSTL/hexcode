import { color, space, compose, display, ColorProps, SpaceProps, DisplayProps, width, WidthProps, position, PositionProps, height, HeightProps } from 'styled-system'

export const Common = compose(color, space, display, width, height, position);

export interface CommonProps extends
    ColorProps,
    SpaceProps,
    DisplayProps, WidthProps, PositionProps, HeightProps {
}