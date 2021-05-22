import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'

import { BaseButton, BaseButtonProps } from './ButtonBase'

interface PrimaryButton {
    colorScheme?: string
}


export const PrimaryButton = styled(BaseButton) <PrimaryButton & BaseButtonProps>`
border: none;
border-radius: ${themeGet('button.radius', '0px')};
color: ${themeGet('button.color.text.primary', 'black')};
background: ${(props) => themeGet(`button.color.background.primary.${props.colorScheme}.default`, 'black')};
&:hover {
    background: ${(props) => themeGet(`button.color.background.primary.${props.colorScheme}.hover`, 'black')};
}
&:active {
    background: ${(props) => themeGet(`button.color.background.primary.${props.colorScheme}.active`, 'black')};
}
&:focus {
    box-shadow: ${(props) => themeGet(`button.shadow.focus.${props.colorScheme}`, 'black')};
}
}
`
