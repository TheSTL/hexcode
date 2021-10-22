import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../index';
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';

export default {
    title: 'Example/Button',
    component: Button,
    parameters: {
        backgrounds: {
            values: [
                { name: 'facecode', value: '#1f252e' },
            ],
        },
    },
} as Meta;

const Template: Story = () => {
    return (
        <HexcodeProvider theme={theme}>
            <Button variant="outline" colorScheme="white" >
                Button
            </Button>
            <br />
            <br />
            <br />
            <Button variant="ghost" colorScheme="white" >
                Button
            </Button>
        </HexcodeProvider>
    );
};

export const FaceCode = Template.bind({});
FaceCode.parameters = {
    backgrounds: { default: 'facecode' }
};
