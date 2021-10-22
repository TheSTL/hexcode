import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody } from '../index';
import { Button } from '../../Button'
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';

export default {
    title: 'Example/Modal',
    component: Modal,
    parameters: {
        backgrounds: {
            values: [
                { name: 'facecode', value: '#1f252e' },
            ],
        },
    },
} as Meta;

const Template: Story = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <HexcodeProvider theme={theme}>
            <Button onClick={() => setOpen(true)} colorScheme="white" variant="ghost"> Toggle modal</Button>
            <Modal lockFocus={false} size="sm" isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalContainer left="30%" top="30%" >
                    <ModalCloseBtn />
                    <ModalHeader  >
                        I'm facecode modal
                    </ModalHeader>
                    <ModalBody>
                        modal body
                    </ModalBody>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const FaceCodeModal = Template.bind({});

FaceCodeModal.parameters = {
    backgrounds: { default: 'facecode' }
};