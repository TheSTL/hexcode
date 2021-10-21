import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useModalContext } from './context';


const CloseBtn = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    &:focus {
        border: 2px solid black
    }
`

export const ModalCloseBtn: React.FC = () => {
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const { onClose } = useModalContext();

    useEffect(() => {
        closeBtnRef.current && closeBtnRef.current.focus();
    }, []);


    return <CloseBtn ref={closeBtnRef} onClick={onClose}> X </CloseBtn>
}