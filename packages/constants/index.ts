import { color, space, compose, display, ColorProps, SpaceProps, DisplayProps, width, WidthProps, position, PositionProps } from 'styled-system'

export const Common = compose(color, space, display, width, position);

export interface CommonProps extends
    ColorProps,
    SpaceProps,
    DisplayProps, WidthProps, PositionProps {
}