import React from 'react';
import styled from 'styled-components';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';

export interface IconButtonProps extends CommonProps, _CSSProps {
    shape?: 'square' | 'circle'
    disabled?: boolean;
    onClick?: () => void;
}


export const IconButton = styled.button.attrs(({ disabled, onClick }) => ({
    type: 'button',
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
}))<IconButtonProps>((props) => {

    return ({
        cursor: props.disabled ? 'not-allowed' : 'pointer',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        transition: 'all 250ms ease 0s',
        width: '24px',
        height: '24px',
        borderRadius: props.shape === 'square' ? '0' : '100%',
        '&:hover': {
            backgroundColor: '#dfe3eb',
        },
        '&:focus': {
            boxShadow: '0px 0px 0px 3px #D8DDE6'
        },
        ...Common(props),
        ..._css(props)
    })
});

IconButton.defaultProps = {
    shape: 'square'
};
