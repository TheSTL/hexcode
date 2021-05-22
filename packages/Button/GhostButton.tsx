import React from 'react';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get'

import { BaseButton, BaseButtonProps } from './ButtonBase'

interface GhostButton {
    colorScheme?: string
}


export const GhostButton = styled(BaseButton) <GhostButton & BaseButtonProps>`
border: none;
border-radius: ${themeGet('button.radius', '0px')};
color: ${(props) => themeGet(`button.color.text.ghost.${props.colorScheme}`, 'black')};
background: transparent;
&:hover {
    background: ${(props) => themeGet(`button.color.background.ghost.${props.colorScheme}.hover`, 'black')};
}
&:active {
    background: ${(props) => themeGet(`button.color.background.ghost.${props.colorScheme}.active`, 'black')};
}
&:focus {
    box-shadow: ${(props) => themeGet(`button.shadow.focus.${props.colorScheme}`, 'black')};
}
}
`