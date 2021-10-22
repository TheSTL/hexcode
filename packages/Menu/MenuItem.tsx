import React from 'react';
import styled from 'styled-components';
import { getTheme } from '../ThemeProvider';
import { useMenuContext } from './context'


export const MenuItem = styled.button.attrs((props) => {
  const { setOpen } = useMenuContext();

  return ({
    onClick: () => {
      setOpen(false);
    }
  })
})(() => {
  return {
    padding: '8px 16px 8px 16px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: getTheme('menu.item.color'),
    outline: 'none',
    '&:hover': getTheme('menu.item.hover'),
    '&:focus': getTheme('menu.item.focus'),
    '&:active': getTheme('menu.item.active'),
  }
})