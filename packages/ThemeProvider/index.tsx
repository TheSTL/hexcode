import React, { createContext, useContext, Context, ContextType } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, Theme } from '../token';

export const HexcodeThemeContext: Context<{}> = createContext({});

export const useTheme = () => useContext(HexcodeThemeContext);

export const HexcodeProvider: React.FC<{ theme: Theme }> = ({
  children,
  theme: themeProps = theme,
}) => {
  return (
    <HexcodeThemeContext.Provider value={themeProps}>
      <HexcodeThemeContext.Consumer>
        {(themeValue) => (
          <ThemeProvider theme={themeValue}> {children}</ThemeProvider>
        )}
      </HexcodeThemeContext.Consumer>
    </HexcodeThemeContext.Provider>
  );
};

export const getTheme = (path: string) => {
  let obj: any = useTheme();
  const a = path.split('.');
  for (let i = 0; i < a.length; i++) {
    const b: string = a[i];
    if (!obj[b]) return '';
    obj = obj[b];
  }

  return obj ? obj : path;
};
