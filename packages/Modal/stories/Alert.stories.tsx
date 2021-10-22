import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalOverlay, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody } from '../index';
import { Button } from '../../Button'
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';
import { ModalFooter } from '../ModalFooter';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <HexcodeProvider theme={theme}>
            <Button onClick={() => setOpen(true)}> don't click</Button>
            <Modal size="sm" isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer>
                    <ModalHeader>
                        I'm a alert modal
                    </ModalHeader>
                    <ModalBody>
                        stop buddy
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" colorScheme="red" onClick={() => setOpen(false)}> Go back</Button>
                    </ModalFooter>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const AlertModalExample = Template.bind({});
