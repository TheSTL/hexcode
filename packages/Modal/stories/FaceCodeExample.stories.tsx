import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Modal, ModalContainer, ModalCloseBtn, ModalHeader, ModalBody } from '../index';
import { Button } from '../../Button'
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
            <Button onClick={() => setOpen(true)}> Toggle modal</Button>
            <Modal size="sm" isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalContainer left="60%" top="60%" >
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

export const FaceCodeModal = Template.bind({});
