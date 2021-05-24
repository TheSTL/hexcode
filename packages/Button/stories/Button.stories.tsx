import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../index';
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story = () => {
  return (
    <HexcodeProvider theme={theme}>
      <Button variant="solid" colorScheme="blue">
        Button
      </Button>
      <br />
      <br />
      <br />
      <Button variant="outline" colorScheme="blue">
        Button
      </Button>
      <br />
      <br />
      <br />
      <Button variant="ghost" colorScheme="blue">
        Button
      </Button>
    </HexcodeProvider>
  );
};

export const Primary = Template.bind({});
