import React from 'react';
import styled from 'styled-components';
import { useMenuContext } from './context'

const Button = styled.button``

export const MenuButton: React.FC = (props) => {
    const { setOpen, menuBtnRef } = useMenuContext();

    return <Button as={props.as} ref={menuBtnRef} onClick={() => {
        setOpen(prev => !prev)

    }}    > {props.children}</Button>
}