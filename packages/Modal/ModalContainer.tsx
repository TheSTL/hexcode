import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getTheme } from '../ThemeProvider';
import { Box } from '../Box'
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';
import { useModalContext } from './context';

interface ModalContainerProps extends _CSSProps, CommonProps { }


export const ModalContainer = styled(Box).attrs(() => ({
  as: motion.div,
  style: {
    x: '-50%', y: '-35%'
  },
  animate: {
    x: '-50%', y: '-50%'
  }
}))<ModalContainerProps>((props) => {
  const { size } = useModalContext();

  return ({
    ...getTheme(`modal.size.${size}`),
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    top: '50%',
    padding: '40px 0 40px 0',
    maxWidth: '100vw',
    maxHeight: '100vh',
    boxSizing: 'border-box',
    background: 'white',
    border: `${getTheme('border[0]')} solid ${getTheme('boxShadow.normal')}`,
    boxShadow: getTheme('boxShadow.normal'),
    ...Common(props)
  })
})


