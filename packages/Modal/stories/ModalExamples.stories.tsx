import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalOverlay, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody } from '../index';
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';

export default {
    title: 'Example/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

// exapmple 1
const Template1: Story = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <HexcodeProvider theme={theme}>
            <button onClick={() => setOpen(true)}> Toggle modal</button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer padding={0} >
                    <ModalCloseBtn />
                    <ModalHeader  >
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const Example1 = Template1.bind({});

// example 2
const Template2: Story = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <HexcodeProvider theme={theme}>
            <button onClick={() => setOpen(true)}> Toggle modal</button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer padding={0} >
                    <ModalCloseBtn />
                    <ModalHeader  >
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const Example2 = Template2.bind({});

// example 3
const Template3: Story = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <HexcodeProvider theme={theme}>
            <button onClick={() => setOpen(true)}> Toggle modal</button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer padding={0} >
                    <ModalCloseBtn />
                    <ModalHeader  >
                        Modal title
                    </ModalHeader>
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const Example3 = Template3.bind({});