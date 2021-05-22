import { color } from '../global/color';
import { space } from '../global/spacing';

export default {
    button: {
        radius: '4px',
        border: '1px solid',
        size: {
            sm: { paddingLeft: space[2], paddingRight: space[2], fontSize: '12px', lineHeight: '1.25em',  },
            md: { paddingLeft: space[4], paddingRight: space[4], fontSize: '14px', lineHeight: '1.92em', },
        },
        color: {
            text: {
                primary: color.white,
                secondary: {
                    blue: color.blue[500],
                    red: color.red[500]
                },
                ghost: {
                    blue: color.blue[500],
                    red: color.red[500]
                }
            },
            background: {
                primary: {
                    blue: {
                        default: color.blue[500],
                        hover: color.blue[550],
                        active: color.blue[600]
                    },
                    red: {
                        default: color.red[500],
                        hover: color.red[550],
                        active: color.red[600]
                    },
                },
                secondary: {
                    blue: {
                        default: color.white,
                        hover: color.blue[0],
                        active: color.blue[50]
                    },
                    red: {
                        default: color.white,
                        hover: color.red[0],
                        active: color.red[50]
                    },
                },
                ghost: {
                    blue: {
                        default: color.white,
                        hover: color.blue[0],
                        active: color.blue[50]
                    },
                    red: {
                        default: color.white,
                        hover: color.red[0],
                        active: color.red[50]
                    },
                },
            },
            border: {
                secondary: {
                    blue: color.blue[500],
                    red: color.red[500],
                }
            }
        },
        shadow: {
            focus: {
                blue: `0px 0px 0px 3px ${color.blue[250]}`,
                red: `0px 0px 0px 3px ${color.red[250]}`
            }
        },
    },
}
