import React from 'react';
import styled from 'styled-components';
import { IconButton } from '../IconButton';
import { CloseIcon } from '../Icons'
import { useModalContext } from './context';


const CloseBtn = styled(IconButton)`
    position: absolute;
    top: 16px;
    right: 16px;
`

export const ModalCloseBtn: React.FC = () => {
    const { onClose } = useModalContext();

    return <CloseBtn data-autofocus onClick={onClose}> <CloseIcon /> </CloseBtn>
}