import { color } from '../global/color';
import { space } from '../global/spacing';

export default {
    button: {
        radius: '4px',
        border: '1px solid',
        size: {
            sm: { paddingLeft: space[2], paddingRight: space[2], fontSize: '12px', lineHeight: '1.25em', },
            md: { paddingLeft: space[4], paddingRight: space[4], fontSize: '14px', lineHeight: '1.92em', },
        },
        color: {
            text: {
                disabled: '#C1C6CE',
                solid: color.white,
                outline: {
                    blue: color.blue[550],
                    red: color.red[550]
                },
                ghost: {
                    blue: color.blue[550],
                    red: color.red[550]
                },
            },
            background: {
                disabled: '#C1C6CE',
                solid: {
                    blue: {
                        default: color.blue[550],
                        hover: color.blue[600],
                        active: color.blue[650]
                    },
                    red: {
                        default: color.red[550],
                        hover: color.red[600],
                        active: color.red[650]
                    },
                },
                outline: {
                    blue: {
                        default: color.white,
                        hover: color.blue[50],
                        active: color.blue[100]
                    },
                    red: {
                        default: color.white,
                        hover: color.red[50],
                        active: color.red[100]
                    },
                },
                ghost: {
                    blue: {
                        default: color.white,
                        hover: color.blue[50],
                        active: color.blue[100]
                    },
                    red: {
                        default: color.white,
                        hover: color.red[50],
                        active: color.red[100]
                    },
                },
            },
            border: {
                disabled: '#C1C6CE',
                outline: {
                    blue: color.blue[550],
                    red: color.red[550],
                }
            }
        },
        shadow: {
            focus: {
                blue: `0px 0px 0px 3px ${color.blue[300]}`,
                red: `0px 0px 0px 3px ${color.red[300]}`
            }
        },
    },
}
