import React from 'react';
import { MenuContext } from './context';
import { useMenu } from './useMenu';

export const Menu: React.FC = (props) => {
    const value = useMenu();

    return <MenuContext.Provider value={value}>
        {props.children}
    </MenuContext.Provider>
}