import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system'
import { Common, CommonProps } from '../constants'
import ButtonStyle from './ButtonStyle';

interface ButtonProps extends CommonProps {
    size: 'sm' | 'md',
    variant: 'solid' | 'outline'
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
`;


Button.defaultProps = {
    size: 'md'
}

