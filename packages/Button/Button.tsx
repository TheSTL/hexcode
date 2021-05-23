import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { solidVariantStyle, ghostVariantStyle, outlineVariantStyle } from './ButtonStyle'

export interface ButtonProps extends BaseButtonProps {
    variant?: 'solid' | 'outline' | 'ghost',
}
const variants = {
    solid: solidVariantStyle,
    ghost: ghostVariantStyle,
    outline: outlineVariantStyle,
}


export const Button: React.FC<ButtonProps> = (props) => {
    const { variant, children, size, disabled } = props;
    const btnStyle = variants[variant!](props);

    return <BaseButton _css={btnStyle} size={size} disabled={disabled}> {children} </BaseButton>
}

Button.defaultProps = {
    variant: 'solid',
    colorScheme: 'blue',
    size: 'md'
}