import React, { useEffect } from 'react';
import FocusLock from 'react-focus-lock';
import { ModalContext } from './context';

export interface ModalProps {
    isOpen: boolean,
    onClose: () => void,
    size?: 'auto' | 'sm',
    lockFocus?: boolean
}

export const Modal: React.FC<ModalProps> = (props) => {
    const { isOpen, onClose, size = "auto", lockFocus = true, children } = props;

    useEffect(() => {
        const onEscKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose(false);
            }
        }
        window.addEventListener('keydown', onEscKeyDown);

        return () => {
            window.removeEventListener('keydown', onEscKeyDown);
        }
    }, [])

    if (!isOpen) return null

    return <ModalContext.Provider value={{ isOpen, onClose, size }}>
        {
            lockFocus ? <FocusLock returnFocus >
                {children}
            </FocusLock> : children
        }

    </ModalContext.Provider>
}

