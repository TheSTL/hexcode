import styled from "styled-components";
import { getTheme } from '../ThemeProvider';
import { _css, _CSSProps } from '../_css';
import { Common, CommonProps } from '../constants';

interface ModalBodyProps extends _CSSProps, CommonProps { }

export const ModalBody = styled.div<ModalBodyProps>((props) =>
({
    color: getTheme('modal.body.color'),
    overflow: 'auto',
    padding: '0 40px 0 40px',
    ...Common(props),
    ..._css(props),
})
);

