import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { css } from '@styled-system/css';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';

const BaseButtonStyle = css`
box-sizing: border-box;
display: inline-fex;
justify-content: center;
align-items: center;
font-family: initial;
font-weight: 600;
outline: none;
cursor: pointer;
transition: all 250ms ease 0s;
`;

export interface ButtonProps extends CommonProps, _CSSProps {
    size?: 'sm' | 'md',
    colorScheme?: 'blue' | 'red'
}

export const BaseButton = styled.button<ButtonProps>`
${BaseButtonStyle}
${Common}
${variant({
    prop: 'size',
    scale: 'button.size',
})}
${_css}
`;

BaseButton.defaultProps = {
    size: 'md',
    colorScheme: 'blue'
}

