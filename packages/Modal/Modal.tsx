import React from 'react';
import { ModalContext } from './context';

export interface ModalProps {
    isOpen: boolean,
    onClose: () => void
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, children } = props;

    if (!isOpen) return null

    return <ModalContext.Provider value={{ isOpen, onClose }}>
        {children}
    </ModalContext.Provider>
}