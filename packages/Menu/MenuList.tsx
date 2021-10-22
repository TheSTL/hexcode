import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import FocusLock from 'react-focus-lock';
import { createPopper } from '@popperjs/core';
import { useMenuContext } from './context'
import { getTheme } from '../ThemeProvider'

const TooltipArrow = styled.div`
    width: 8px;
    height: 8px;
    &::before {
        content: "";
        background: ${() => getTheme('menu.list.background')};
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%) rotate(45deg);
        position: absolute;
        top: 0;
        left: 0;
    } 
`

const List = styled.div`
    display: ${(props) => props.isOpen ? 'inline-flex' : 'none'};
    flex-direction: column;
    padding: 8px 0;
    border: ${() => `${getTheme('menu.list.border')} ${getTheme('menu.list.borderColor')}`};
    box-shadow: ${() => getTheme('menu.list.boxShadow')};
    background: ${() => getTheme('menu.list.background')};
      &[data-popper-placement^="bottom"] {
        ${TooltipArrow} {
          top: 0px;
          &::before {
            border: 1px solid;
            border-color: ${() => getTheme('menu.list.borderColor')};
            border-bottom: none;
            border-right: none;
          }
        }
      }
`

const Lock = styled.div`
  display: flex;
  flex-direction: column
`


export const MenuList: React.FC = (props) => {
    const listRef = useRef(null);
    const { arrow } = props;
    const { menuBtnRef, isOpen, setOpen } = useMenuContext();

    useEffect(() => {

        if (isOpen) {
            const obj = createPopper(menuBtnRef.current, listRef.current!, {
                placement: 'bottom-start',
                modifiers: [
                    arrow && ({
                        name: "offset",
                        options: {
                            offset: [-8, 8]
                        }
                    }),
                    !arrow && ({
                        name: "offset",
                        options: {
                            offset: [0, 2]
                        }
                    })
                ].filter(Boolean)

            })
        }
    }, [isOpen])

    useEffect(() => {
        const onClickOutside = (e) => {
            if (!menuBtnRef.current.contains(e.target))
                setOpen(false);
        };

        window.addEventListener('click', onClickOutside);

        return () => {
            window.removeEventListener('click', onClickOutside);
        }
    }, []);

    return <List ref={listRef} isOpen={isOpen}>
        {arrow && <TooltipArrow data-popper-arrow />}
        {isOpen && <FocusLock as={Lock}>
            {props.children}
        </FocusLock>
        }
    </List>
}

MenuList.defaultProps = {
    arrow: true
}