import { getTheme } from '../ThemeProvider'
import { ButtonProps } from './Button'

export const solidVariantStyle = (props: ButtonProps) => {
    const { colorScheme, disabled } = props;
    if (disabled) {
        return {
            border: 'none',
            color: getTheme(`button.color.text.solid`),
            borderRadius: getTheme('button.radius'),
            background: getTheme(`button.color.background.disabled`),
        }
    }

    return {
        border: 'none',
        color: getTheme(`button.color.text.solid`),
        borderRadius: getTheme('button.radius'),
        background: getTheme(`button.color.background.solid.${colorScheme}.default`),
        '&:hover': {
            background: getTheme(`button.color.background.solid.${colorScheme}.hover`)
        },
        '&:active': {
            background: getTheme(`button.color.background.solid.${colorScheme}.active`)
        },
        '&:focus': {
            boxShadow: getTheme(`button.shadow.focus.${colorScheme}`)
        },
    }
}

export const outlineVariantStyle = (props: ButtonProps) => {
    const { colorScheme, disabled } = props;

    if (disabled) {
        return {
            border: getTheme('button.border'),
            borderColor: getTheme(`button.color.border.disabled`),
            color: getTheme(`button.color.text.disabled`),
            borderRadius: getTheme('button.radius'),
            background: getTheme(`button.color.background.outline.${colorScheme}.default`),
        }
    }

    return {
        border: getTheme('button.border'),
        borderColor: getTheme(`button.color.border.outline.${colorScheme}`),
        color: getTheme(`button.color.text.outline.${colorScheme}`),
        borderRadius: getTheme('button.radius'),
        background: getTheme(`button.color.background.outline.${colorScheme}.default`),
        '&:hover': {
            background: getTheme(`button.color.background.outline.${colorScheme}.hover`)
        },
        '&:active': {
            background: getTheme(`button.color.background.outline.${colorScheme}.active`)
        },
        '&:focus': {
            boxShadow: getTheme(`button.shadow.focus.${colorScheme}`)
        },
    }
}

export const ghostVariantStyle = (props: ButtonProps) => {
    const { colorScheme, disabled } = props;

    if (disabled) {
        return {
            border: 'none',
            color: getTheme(`button.color.text.disabled`),
            borderRadius: getTheme('button.radius'),
            background: 'transparent',
        }
    }

    return {
        border: 'none',
        color: getTheme(`button.color.text.ghost.${colorScheme}`),
        borderRadius: getTheme('button.radius'),
        background: 'transparent',
        '&:hover': {
            background: getTheme(`button.color.background.ghost.${colorScheme}.hover`)
        },
        '&:active': {
            background: getTheme(`button.color.background.ghost.${colorScheme}.active`)
        },
        '&:focus': {
            boxShadow: getTheme(`button.shadow.focus.${colorScheme}`)
        },
    };
}
