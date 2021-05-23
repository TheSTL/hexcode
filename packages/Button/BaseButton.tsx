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
transition: all 250ms ease 0s;
`;

export interface BaseButtonProps extends CommonProps, _CSSProps {
    size?: 'sm' | 'md',
    colorScheme?: 'blue' | 'red',
    disabled?: boolean,
    onClick?: () => void
}

export const BaseButton = styled.button.attrs(({ disabled, onClick }) => ({
    type: 'button',
    disabled: disabled,
    onClick: disabled ? undefined : onClick
})) <BaseButtonProps>`
cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
${BaseButtonStyle}
${Common}
${variant({
    prop: 'size',
    scale: 'button.size',
})}
${_css}
`;
