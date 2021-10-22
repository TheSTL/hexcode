import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';
import {
  solidVariantStyle,
  ghostVariantStyle,
  outlineVariantStyle,
} from './ButtonStyle';
import { getTheme } from '../ThemeProvider'


export interface ButtonProps extends CommonProps, _CSSProps {
  size?: 'sm' | 'md';
  colorScheme?: 'blue' | 'red' | 'white';
  variant?: 'solid' | 'outline' | 'ghost';
  disabled?: boolean;
  onClick?: () => void;
}

const variants = {
  solid: solidVariantStyle,
  ghost: ghostVariantStyle,
  outline: outlineVariantStyle,
};

export const Button = styled.button.attrs(({ disabled, onClick }) => ({
  type: 'button',
  disabled: disabled,
  onClick: disabled ? undefined : onClick,
}))<ButtonProps>((props) => {
  const btnStyle = variants[props.variant!](props);

  return ({
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    boxSizing: 'border-box',
    display: 'inline-fex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    outline: 'none',
    transition: 'all 250ms ease 0s',
    ...btnStyle,
    ...getTheme(`button.size.${props.size}`),
    ...Common(props),
    ..._css(props)
  })
});

Button.defaultProps = {
  variant: 'solid',
  colorScheme: 'blue',
  size: 'md',
};
