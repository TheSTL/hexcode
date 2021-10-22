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
    const [sideBarSelected, setSideBarSelected] = useState(0);
    const content = [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    ]
    return (
        <HexcodeProvider theme={theme}>
            <Button onClick={() => setOpen(true)}> Test instruction</Button>
            <Modal isOpen={isOpen} onClose={() => { setOpen(false) }}>
                <ModalOverlay />
                <ModalContainer width="80%" >
                    <ModalCloseBtn />
                    <div style={{ display: "flex", justifyContent: "space-around" }}>
                        {/* <ul> */}
                        <div style={{ display: "flex", width: "15%", flexDirection: "column", justifyContent: "flex-start", backgroundColor: "#f7f8fa", height: "100%", }}>
                            <div onClick={() => setSideBarSelected(0)} style={{ background: (sideBarSelected == 0 ? "#eaf3fe" : "none"), fontWeight: (sideBarSelected == 0 ? "bold" : ""), borderLeft: (sideBarSelected == 0 ? "4px solid #2f89fc" : "4px solid #f7f8fa") }}>
                                <p style={{ padding: "5px" }}>
                                    Option 1
                                </p>
                            </div>
                            <div onClick={() => setSideBarSelected(1)} style={{ background: (sideBarSelected == 1 ? "#eaf3fe" : "none"), fontWeight: (sideBarSelected == 1 ? "bold" : ""), borderLeft: (sideBarSelected == 1 ? "4px solid #2f89fc" : "4px solid #f7f8fa") }}>
                                <p style={{ padding: "5px" }}>
                                    Option 2
                                </p>
                            </div>
                        </div>
                        <div style={{ overflowY: "auto", width: "85%", height: "300px", marginLeft: "5%", paddingRight: "5%" }}>
                            {content[sideBarSelected]}
                        </div>
                    </div>
                </ModalContainer>
            </Modal>
        </HexcodeProvider>
    );
};

export const CustomizedModal = Template.bind({});
