import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system'
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants'
import ButtonStyle from './ButtonStyle';

interface ButtonProps extends CommonProps, _CSSProps {
    size: 'sm' | 'md',
    variant: 'solid' | 'outline',
    children: string,
}

export const Button = styled.button<ButtonProps>`
${ButtonStyle}
${Common}
${variant({
    prop: 'size',
    scale: 'button.size',
})}
${variant({
    scale: 'buttons.variant',
})}
${_css}
`;

Button.defaultProps = {
    size: 'md'
}

