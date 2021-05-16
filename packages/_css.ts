import css, { SystemStyleObject } from '@styled-system/css';

export interface _CSSProps {
    _css?: SystemStyleObject
}

export const _css = (props: _CSSProps) => css(props._css)
