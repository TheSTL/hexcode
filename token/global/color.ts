type ColorScale = {
    0: string,
    50: string,
    100: string,
    150: string,
    200: string,
    250: string,
    300: string,
    350: string,
    400: string,
    450: string,
    500: string,
    550: string,
    600: string,
    650: string,
    700: string,
    750: string,
    800: string,
    950: string,
    1000: string,
    1050: string
}



export type Color = {
    blue: ColorScale,
    red: ColorScale
    white: string
}

export const color: Color = {
    blue: {
        0: '#f4f8fe',
        50: '#eaf3fe',
        100: '#d5e7fe',
        150: '#c1dbfe',
        200: '#abcffd',
        250: '#97c4fd',
        300: '#82b8fd',
        350: '#6dacfc',
        400: '#58A0FC',
        450: '#4495fc',
        500: '#2F89FC',
        550: '#2A7BE2',
        600: '#256dc9',
        650: '#205faf',
        700: '#1c5297',
        750: '#17447d',
        800: '#123664',
        950: '#0e284b',
        1000: '#091b32',
        1050: '#040d18'
    },
    red: {
        0: '#fae9e6',
        50: '#f6d2cc',
        100: '#f2bcb3',
        150: '#eda599',
        200: '#e98f80',
        250: '#e57866',
        300: '#e0624d',
        350: '#dc4b33',
        400: '#d8351a',
        450: '', // need to fix it
        500: '#D41F00',
        550: '#be1b00',
        600: '#a91800',
        650: '#931500',
        700: '#7f1200',
        750: '#690f00',
        800: '#540c00',
        950: '#3f0900',
        1000: '#2a0600',
        1050: '#140300'
    },
    white: "#FFFFFF"
};
