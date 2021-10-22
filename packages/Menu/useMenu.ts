import React, { useEffect, useRef, useState } from 'react';

export const useMenu = () => {
    const menuBtnRef = useRef(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            menuBtnRef.current.focus()
        }
    }, [isOpen]);

    return {
        isOpen,
        setOpen,
        menuBtnRef,
    }
}