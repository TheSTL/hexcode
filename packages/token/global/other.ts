export interface Other {
    fonts: {
        normal: string,
    },
    space: string[],
    fontSize: string[],
    lineHeight: string[],
    fontWeights: {
        light: number,
        regular: number,
        medium: number,
        semibold: number,
        bold: number,
    },
    radii: number[],
    border: string[],
    borderColor: {
        normal: string,
    },
    boxShadow: {
        normal: string
    }
}
export const other: Other = {
    fonts: {
        normal: "'proxima-nova', sans-serif",
    },
    space: [
        "0px",
        "4px",
        "8px",
        "16px",
        "20px",
        "24px",
        "28px",
        "32px",
        "36px",
        "40px",
    ],
    fontSize: ["12px", "14px", "16px", "18px", "20px", "22px", "24px"],
    lineHeight: ["16px", "18px", "20px", "22px", "24px", "26px", "28px"],
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },
    radii: [0, 2, 4],
    border: ['1px', '2px'],
    borderColor: {
        normal: "#D8DDE6",
    },
    boxShadow: {
        normal: '0 4px 8px 0 rgba(0,0,0,0.1)'
    }
}