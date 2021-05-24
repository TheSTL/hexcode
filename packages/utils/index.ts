import isPropValid from '@emotion/is-prop-valid'

export const omitInvalidHtmlProps = (props: any) => {
    const validPros: any = {};
    Object.keys(props).forEach((key) => {
        if (isPropValid(key)) {
            validPros[key] = props[key];
        }
    })
    return validPros
}