import React from 'react';
import styled from 'styled-components';
import { useModalContext } from './context'
import { Box } from '../Box'

const Overlay = styled(Box)`
  background: rgba(51,51,51,0.7);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`
export const ModalOverlay: React.FC = () => {
  const { onClose } = useModalContext();

  return <Overlay onClick={onClose} />

}