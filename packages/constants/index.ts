import { color, space, compose, display, ColorProps, SpaceProps, DisplayProps } from 'styled-system'

export const Common = compose(color, space, display);

export interface CommonProps extends
    ColorProps,
    SpaceProps,
    DisplayProps {
}