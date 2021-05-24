import { globalToken, globalTokenObject } from './global';
import { componentsToken, componentsTokenObject } from './components';

export interface Theme extends globalTokenObject, componentsTokenObject { }

export const theme = {
    ...globalToken,
    ...componentsToken
}