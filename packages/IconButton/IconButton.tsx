import React from 'react';
import styled from 'styled-components';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';

export interface IconButtonProps extends CommonProps, _CSSProps {
    disabled?: boolean;
    onClick?: () => void;
}


export const IconButton = styled.button.attrs(({ disabled, onClick }) => ({
    type: 'button',
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
}))<IconButtonProps>((props) => {

    return ({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        transition: 'all 250ms ease 0s',
        width: '24px',
        height: '24px',
        borderRadius: '100%',
        '&:hover': {
            backgroundColor: '#dfe3eb',
        },
        '&:focus': {
            boxShadow: '0px 0px 0px 3px #97c4fd'
        },
        ...Common(props),
        ..._css(props)
    })
});
