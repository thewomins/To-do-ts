import React, {useContext, useEffect, useReducer} from "react";
import {
  reducerActionTheme,
  TTheme,
  TThemesAvailable,
} from "src/types/Todo.types";

const themes: {[Key in TThemesAvailable]: TTheme} = {
  light: {
    primary: "#6750A4",
    onPrimary: "#FFFFFF",
    primaryContainer: "#EADDFF",
    onPrimaryContainer: "#21005E",
    secundary: "#625B71",
    onSecundary: "#FFFFFF",
    secundaryContainer: "#E8DEF8",
    onSecundaryContainer: "#1E192B",
    tertiary: "#FFFFFF",
    onTertiaty: "#ffffff",
    tertiaryContainer: "#fed7f9",
    onTertiaryContainer: "#370B1E",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#fefbff",
    onBackground: "#1C1B1F",
    surface: "#ffdad6",
    onSurface: "#1C1B1F",
    outline: "#79747E",
    surfaceVariant: "#e1e2ec",
    onSurfaceVariant: "#45464f",
    shadow: "#000000",
    shadowTransparency: "rgba(0, 0, 0, 0.5)",
    opacityHover: "rgba(0, 0, 0, 0.08)",
  },
  dark: {
    primary: "#D0BCFF",
    onPrimary: "#371E73",
    primaryContainer: "#4F378B",
    onPrimaryContainer: "#EADDFF",
    secundary: "#CCC2DC",
    onSecundary: "#332D41",
    secundaryContainer: "#4A4458",
    onSecundaryContainer: "#E8DEF8",
    tertiary: "#EFB8C8",
    onTertiaty: "#492532",
    tertiaryContainer: "#5a3d59",
    onTertiaryContainer: "#FFD8E4",
    error: "#ffb4ab",
    onError: "#690005",
    errorContainer: "#93000a",
    onErrorContainer: "#ffdad6",
    background: "#1b1b1f",
    onBackground: "#E6E1E5",
    surface: "#212025",
    onSurface: "#E6E1E5",
    outline: "#938F99",
    surfaceVariant: "#45464f",
    onSurfaceVariant: "#c5c6d0",
    shadow: "#000000",
    shadowTransparency: "rgba(0, 0, 0, 0.5)",
    opacityHover: "rgba(0, 0, 0, 0.08)",
  },
};

const initialState: TThemesAvailable = "light";

//por cada propiedad en theme setea la propiedad
function setTheme(Theme: TTheme) {
  Object.entries(Theme).forEach(element => {
    //console.log(element[0], element[1]);
    document.documentElement.style.setProperty("--" + element[0], element[1]);
  });
}

const reducer = (state: TThemesAvailable, action: reducerActionTheme) => {
  switch (action.type) {
    case "changeThemeTo":
      return action.themeName;
    default:
      throw new Error();
  }
};

const ThemeContext = React.createContext<{
  theme: TThemesAvailable;
  dispatchTheme: React.Dispatch<reducerActionTheme>;
}>({
  theme: initialState,
  dispatchTheme: () => initialState,
});

const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [theme, dispatchTheme] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{theme, dispatchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const {theme = initialState, dispatchTheme} = useContext(ThemeContext);

  useEffect(() => {
    setTheme(themes[theme]);
  }, [theme]);

  return {theme, dispatchTheme};
};

export {ThemeContextProvider, useTheme};
