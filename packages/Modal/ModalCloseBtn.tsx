import React from 'react';
import styled from 'styled-components';
import { useModalContext } from './context';

const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ModalCloseBtn: React.FC = () => {
    const { onClose } = useModalContext();
    return <CloseBtn onClick={onClose}> X </CloseBtn>
}