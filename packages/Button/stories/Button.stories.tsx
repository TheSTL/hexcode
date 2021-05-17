import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../Button';
import theme from '../../../token'
import { ThemeProvider } from 'styled-components';


export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = () => {

    return <ThemeProvider theme={theme}> <Button > Button</Button > </ThemeProvider>;
}

export const Primary = Template.bind({});

