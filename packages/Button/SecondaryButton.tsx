import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'

import { BaseButton, ButtonProps } from './ButtonBase'

interface SecondaryButton {
    colorScheme?: string
}


export const SecondaryButton = styled(BaseButton) <SecondaryButton & ButtonProps>`
border: ${themeGet('button.border', '1px solid')};
border-radius: ${themeGet('button.radius', '0px')};
border-color: ${(props) => themeGet(`button.color.border.secondary.${props.colorScheme}`, 'black')};
color: ${(props) => themeGet(`button.color.text.secondary.${props.colorScheme}`, 'black')};
background: ${(props) => themeGet(`button.color.background.secondary.${props.colorScheme}.default`, 'black')};
&:hover {
    background: ${(props) => themeGet(`button.color.background.secondary.${props.colorScheme}.hover`, 'black')};
}
&:active {
    background: ${(props) => themeGet(`button.color.background.secondary.${props.colorScheme}.active`, 'black')};
}
&:focus {
    box-shadow: ${(props) => themeGet(`button.shadow.focus.${props.colorScheme}`, 'black')};
}
}
`