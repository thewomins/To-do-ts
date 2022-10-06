import React, {useContext, useReducer} from "react";
import { reducerActionTheme, TTheme, TThemesAvailable } from "src/types/Todo.types";

const themes: {[Key in TThemesAvailable]: TTheme} = {
  light: {
    primary: "#355ab0",
    onPrimary: "#ffffff",
    primaryContainer: "#dae2ff",
    onPrimaryContainer: "#001848",
    secundary: "#585e71",
    onSecundary: "#ffffff",
    secundaryContainer: "#dce2f9",
    onSecundaryContainer: "#151b2c",
    tertiary: "#735471",
    onTertiaty: "#ffffff",
    tertiaryContainer: "#fed7f9",
    onTertiaryContainer: "#2b122b",
    error: "#ba1a1a",
    onError: "#ffffff",
    errorContainer: "#ffdad6",
    onErrorContainer: "#410002",
    background: "#fefbff",
    onBackground: "#1b1b1f",
    surface: "#fefbff",
    onSurface: "#1b1b1f",
    outline: "#757780",
    surfaceVariant: "#e1e2ec",
    onSurfaceVariant: "#45464f",
    textNoFocusColor: "string",
  },
  dark: {
    primary: "#b2c5ff",
    onPrimary: "#002b73",
    primaryContainer: "#164296",
    onPrimaryContainer: "#dae2ff",
    secundary: "#c0c6dd",
    onSecundary: "#2a3042",
    secundaryContainer: "#404659",
    onSecundaryContainer: "#dce2f9",
    tertiary: "#e1bbdc",
    onTertiaty: "#422741",
    tertiaryContainer: "#5a3d59",
    onTertiaryContainer: "#fed7f9",
    error: "#ffb4ab",
    onError: "#690005",
    errorContainer: "#93000a",
    onErrorContainer: "#ffdad6",
    background: "#1b1b1f",
    onBackground: "#e4e2e6",
    surface: "#1b1b1f",
    onSurface: "#e4e2e6",
    outline: "#8f909a",
    surfaceVariant: "#45464f",
    onSurfaceVariant: "#c5c6d0",
    textNoFocusColor: "string",
  },
};

const initialState:TThemesAvailable = "light" ;

//por cada propiedad en theme setea la propiedad
function setTheme(Theme: TTheme) {
  Object.entries(Theme).forEach(element => {
    console.log(element[0], element[1]);
    document.documentElement.style.setProperty("--" + element[0], element[1]);
  });
}

const reducer = (state: TThemesAvailable, action: reducerActionTheme) => {
  switch (action.type) {
    case "changeThemeTo":
      setTheme(themes[action.themeName]);
      return action.themeName;
    default:
      throw new Error();
  }
};

const ThemeContext = React.createContext<{
  theme:TThemesAvailable,
  dispatchTheme:React.Dispatch<reducerActionTheme>
}>({
  theme: initialState,
  dispatchTheme: () => initialState,
});

const ThemeContextProvider: React.FC<{children:React.ReactNode}> = ({children}) => {
  const [theme, dispatchTheme] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{theme, dispatchTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const {theme = initialState, dispatchTheme} = useContext(ThemeContext);
  return {theme, dispatchTheme};
};

export {ThemeContextProvider, useTheme};
