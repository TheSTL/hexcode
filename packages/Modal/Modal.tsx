import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalContext } from './context';

export interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    size?: 'auto' | 'sm'
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, size, children } = props;

    if (!isOpen) return null

    return <ModalContext.Provider value={{ isOpen, onClose, size }}>
        <FocusLock returnFocus >
            {children}
        </FocusLock>
    </ModalContext.Provider>
}