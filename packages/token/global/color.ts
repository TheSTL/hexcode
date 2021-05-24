type ColorScale = {
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
    850: string,
    900: string,
    950: string,
    1000: string
}



export type Color = {
    blue: ColorScale,
    red: ColorScale
    white: string
}

export const color: Color = {
    blue: {
        50: '#f4f8fe',
        100: '#eaf3fe',
        150: '#d5e7fe',
        200: '#c1dbfe',
        250: '#abcffd',
        300: '#97c4fd',
        350: '#82b8fd',
        400: '#6dacfc',
        450: '#58A0FC',
        500: '#4495fc',
        550: '#2F89FC',
        600: '#2A7BE2',
        650: '#256dc9',
        700: '#205faf',
        750: '#1c5297',
        800: '#17447d',
        850: '#123664',
        900: '#0e284b',
        950: '#091b32',
        1000: '#0400d18'
    },
    red: {
        50: '#fae9e6',
        100: '#f6d2cc',
        150: '#f2bcb3',
        200: '#eda599',
        250: '#e98f80',
        300: '#e57866',
        350: '#e0624d',
        400: '#dc4b33',
        450: '#d8351a',
        500: '', // need to fix it
        550: '#D41F00',
        600: '#be1b00',
        650: '#a91800',
        700: '#931500',
        750: '#7f1200',
        800: '#690f00',
        850: '#540c00',
        900: '#3f0900',
        950: '#2a0600',
        1000: '#140300'
    },
    white: "#FFFFFF",
};
