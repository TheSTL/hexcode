import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import deepmerge from 'deepmerge'
import { Menu, MenuButton, MenuList, MenuItem } from '../index';
import { IconButton } from '../../IconButton'
import { CloseIcon, MoreHorizontalIcon } from '../../Icons'
import { Button } from '../../Button'
import { theme } from '../../token';
import { HexcodeProvider } from '../../ThemeProvider';

export default {
    title: 'Example/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story = () => {
    const [themeState, setTheme] = useState(theme);
    const facecodeTheme = deepmerge(theme, {
        menu: {
            list: {
                background: '#3c424c',
                boxShadow: '',
                borderColor: '',
                border: 'none',
            },
            item: {
                color: 'white',
                'hover': {
                    background: '#2F89FC'
                },
                'focus': {
                    background: '#2F89FC'
                },
                'active': {
                    background: '#2F89FC',
                    color: '#3c424c',
                }
            }
        }
    })

    return (
        <>
            <HexcodeProvider theme={themeState}>
                <Menu>
                    <span style={{ marginLeft: '100px' }}> <MenuButton as={Button} > Users </MenuButton> </span>
                    <span style={{ float: 'right' }}><input type="checkbox" onChange={(e) => {

                        if (e.target.checked) {
                            setTheme(facecodeTheme)
                        } else {
                            setTheme(theme)
                        }
                    }} /> Toggle theme </span>

                    <MenuList >
                        <MenuItem>
                            <div style={{
                                display: 'flex'
                            }}>
                                <img src="https://ca.slack-edge.com/T0292H9LU-US83R9B6C-1a8002427276-512" style={{
                                    width: '40px',
                                    height: '40px',
                                    marginRight: '16px',
                                    borderRadius: '100%'

                                }} />
                                <div>
                                    <div style={{ fontWeight: '600' }}> Ashu deshwal</div>
                                    <div> Frontend engineer </div>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>  <div style={{
                            display: 'flex'
                        }}>
                            <img src="https://ca.slack-edge.com/T0292H9LU-US83R9B6C-1a8002427276-512" style={{
                                width: '40px',
                                height: '40px',
                                marginRight: '16px'

                            }} />
                            <div>
                                <div style={{ fontWeight: '600' }}> Ashu deshwal</div>
                                <div> Frontend engineer </div>
                            </div>
                        </div></MenuItem>
                        <MenuItem>  <div style={{
                            display: 'flex'
                        }}>
                            <img src="https://ca.slack-edge.com/T0292H9LU-US83R9B6C-1a8002427276-512" style={{
                                width: '40px',
                                height: '40px',
                                marginRight: '16px'

                            }} />
                            <div>
                                <div style={{ fontWeight: '600' }}> Ashu deshwal</div>
                                <div> Frontend engineer </div>
                            </div>
                        </div></MenuItem>
                    </MenuList>
                </Menu>
            </HexcodeProvider>
        </>
    );
};

export const menu = Template.bind({});
