import { global, Global } from './global';
import componentsToken from './components/button';

export interface Theme extends Global { }

export const theme = {
    ...global,
    ...componentsToken
}