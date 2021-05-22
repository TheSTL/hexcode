import React from 'react';
import { Story, Meta } from '@storybook/react';
import { PrimaryButton, BaseButton, SecondaryButton, GhostButton } from '../index';
import theme from '../../../token'
import { ThemeProvider } from 'styled-components';


export default {
    title: 'Example/Button',
    component: BaseButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = () => {

    return <ThemeProvider theme={theme}>
        <BaseButton>Base Button </BaseButton>
        <br />
        <br />
        <br />
        <PrimaryButton colorScheme="blue" > Primary Button</PrimaryButton >
        <br />
        <br />
        <br />
        <SecondaryButton colorScheme="red"> Secodary button</SecondaryButton>
        <br />
        <br />
        <br />
        <GhostButton colorScheme="red"> Ghost button</GhostButton>
    </ThemeProvider>;
}

export const Primary = Template.bind({});

