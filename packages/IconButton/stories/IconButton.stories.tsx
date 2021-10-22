import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton } from '../index';
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';
import { CloseIcon } from '../../Icons'

export default {
    title: 'Example/IconButton',
    component: IconButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = () => {
    return (
        <HexcodeProvider theme={theme}>
            <IconButton >
                <CloseIcon />
            </IconButton>
            <br />
            <br />
            <br />
            <IconButton>
                <CloseIcon />
            </IconButton>

        </HexcodeProvider>
    );
};

// export const Primary = Template.bind({});
