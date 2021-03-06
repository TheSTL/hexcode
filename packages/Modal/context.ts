import { createContext, useContext } from 'react';

export const ModalContext = createContext({
    isOpen: false,
    onClose: () => { },
    size: 'auto'
});

export const useModalContext = () => useContext(ModalContext);
