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

const Template: Story = () => {
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

export const SimpleModal = Template.bind({});
