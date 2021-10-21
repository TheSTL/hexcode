import styled from 'styled-components';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';

export interface BoxProps extends CommonProps, _CSSProps { }


export const Box = styled.div<BoxProps>`
  ${Common}
  ${_css}
`