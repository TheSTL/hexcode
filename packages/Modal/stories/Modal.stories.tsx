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
            <Button onClick={() => setOpen(true)}> Toggle modal</Button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer>
                    <ModalCloseBtn />
                    <ModalHeader  >
                        I'm assessment title
                    </ModalHeader>
                    <ModalBody>
                        modal body
                    </ModalBody>
                    <ModalFooter>
                        <Button marginRight="8px"> Save </Button>
                        <Button variant="ghost"> cancel </Button>
                    </ModalFooter>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const SimpleModal = Template.bind({});
