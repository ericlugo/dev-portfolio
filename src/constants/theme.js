import React from "react"
import {
  createGlobalStyle,
  ThemeProvider as StyleProvider,
} from "styled-components"
import reset from "styled-reset"

const palettes = {
  paletteNo1: {
    light: {
      background: "#EFF1F3",
      foreground: "#2F323A",
      accentDark: "#33658A",
      accentLight: "#86BBD8",
    },
    dark: {
      background: "#2F323A",
      foreground: "#EFF1F3",
      accentDark: "#86BBD8",
      accentLight: "#33658A",
    },
    background: "#EFF1F3",
    foreground: "#2F323A",
    accentDark: "#33658A",
    accentLight: "#86BBD8",
  },
  paletteNo2: {
    background: "#FAFDF6",
    foreground: "#2D3047",
    accentDark: "#4D4B48",
    accentLight: "#7C7471",
  },
  paletteNo3: {
    background: "#2D3047",
    foreground: "#FBF5F3",
    accentDark: "#1AC8ED",
    accentLight: "#8EF9F3",
  },
  paletteNo4: {
    background: "#2D2A32",
    foreground: "#FAFDF6",
    accentDark: "#FFBC0A",
    accentLight: "#EEEFA8",
  },
}

const baseTheme = {
  typography: {
    mainFont: "'IBM Plex Sans', sans-serif",
    headerFont: "'Anton', Impact, sans-serif",
    codeFont: "'IBM Plex Mono', monospace",
    lineHeight: "1.45rem",
    // final measurements of the items below are based on browser settings
    fontBase: "100%", //16px default in most browsers
    headerSize: "3.052rem", //around 49px
    subHeaderSize: "1.953rem", //around 31px
    sectionSize: "1.563rem", //around 25px
    paragraphSize: "1rem", //around 16px, same as fontBase
    smallText: "0.8rem", //around 13px
  },
  spacing: {
    mainPadding: "1rem",
    mainMargin: "1rem",
  },
  breakpoints: {
    xs: "576px",
    sm: "768px",
    md: "992px",
    lg: "1200px",
  },
}

const siteThemes = {
  light: {
    ...baseTheme,
    colors: {
      backgroundColor: palettes.paletteNo1.light.background,
      foregroundColor: palettes.paletteNo1.light.foreground,
      accentDark: palettes.paletteNo1.light.accentDark,
      accentLight: palettes.paletteNo1.light.accentLight,
      avatar: {
        bg1: palettes.paletteNo1.light.accentLight,
        bg2: palettes.paletteNo1.light.accentLight,
        main: palettes.paletteNo1.light.foreground,
        accent: palettes.paletteNo1.light.accentDark,
      },
      toggle: {
        default: palettes.paletteNo1.light.background,
        switchActive: palettes.paletteNo1.light.accentLight,
        notchActive: palettes.paletteNo1.light.accentDark,
      },
    },
    effects: {
      shadow:
        ".3rem .3rem .5rem rgba(0,0,0,0.5), .3rem -.3rem .5rem rgba(250,250,250,0.5), -.3rem .3rem .5rem rgba(250,250,250,0.5), -.3rem -.3rem .5rem rgba(255,255,255,0.7)",
      inset:
        "inset -.3rem -.3rem .5rem rgba(255,255,255,0.7), inset -.3rem .3rem .3rem rgba(150,150,150,0.5), inset .3rem -.3rem .3rem rgba(150,150,150,0.5), inset .3rem .3rem .5rem rgba(0,0,0,0.5)",
      toggleSwitchShadow:
        "inset -.1rem -.1rem .3rem rgba(0,0,0,0.3), inset .1rem -.1rem .3rem rgba(250,250,250,0.3), inset -.1rem .1rem .3rem rgba(250,250,250,0.3), inset .1rem .1rem .3rem rgba(255,255,255,0.5)",
    },
  },
  dark: {
    ...baseTheme,
    colors: {
      backgroundColor: palettes.paletteNo1.dark.background,
      foregroundColor: palettes.paletteNo1.dark.foreground,
      accentDark: palettes.paletteNo1.dark.accentDark,
      accentLight: palettes.paletteNo1.dark.accentLight,
      avatar: {
        bg1: palettes.paletteNo1.dark.accentDark,
        bg2: palettes.paletteNo1.dark.accentLight,
        main: palettes.paletteNo1.dark.background,
        accent: palettes.paletteNo1.dark.background,
      },
      toggle: {
        default: palettes.paletteNo1.dark.background,
        switchActive: palettes.paletteNo1.dark.accentLight,
        notchActive: palettes.paletteNo1.dark.accentDark,
      },
    },
    effects: {
      shadow:
        ".3rem .3rem .5rem rgba(0,0,0,0.5), .3rem -.3rem .5rem rgba(250,250,250,0.5), -.3rem .3rem .5rem rgba(250,250,250,0.5), -.3rem -.3rem .5rem rgba(255,255,255,0.7)",
      inset:
        "inset -.3rem -.3rem .5rem rgba(100,100,100,0.7), inset -.3rem .3rem .3rem rgba(50,50,50,0.5), inset .3rem -.3rem .3rem rgba(50,50,50,0.5), inset .3rem .3rem .5rem rgba(0,0,0,0.5)",
      toggleSwitchShadow:
        "inset -.1rem -.1rem .3rem rgba(0,0,0,0.3), inset .1rem -.1rem .3rem rgba(250,250,250,0.3), inset -.1rem .1rem .3rem rgba(250,250,250,0.3), inset .1rem .1rem .3rem rgba(255,255,255,0.5)",
    },
  },
}

const initialState = {
  dark: false,
  theme: siteThemes.light,
}

export const ThemeContext = React.createContext(initialState)

export function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false)

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true"
    setDark(isDark)
  }, [dark])

  const toggle = () => {
    const isDark = !dark
    localStorage.setItem("dark", JSON.stringify(isDark))
    setDark(isDark)
  }

  const theme = dark ? siteThemes.dark : siteThemes.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      <StyleProvider theme={theme}>{children}</StyleProvider>
    </ThemeContext.Provider>
  )
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    transition: color .3s ease-in-out;
    box-sizing: border-box;
  }
  body {
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.foregroundColor};
    font-size: ${props => props.theme.typography.fontBase};
    font-weight: 400;
    font-family: ${props => props.theme.typography.mainFont};
  }
  h1 {
    font-family: ${props => props.theme.typography.headerFont};
    font-size: ${props => props.theme.typography.headerSize}
  }
  h3 {
    font-family: ${props => props.theme.typography.headerFont};
    font-size: ${props => props.theme.typography.subHeaderSize};
  }
  h4 {
    font-family: ${props => props.theme.typography.headerFont};
    font-size: ${props => props.theme.typography.sectionSize};
  }
  h6 {
    font-family: ${props => props.theme.typography.codeFont};
    font-size: ${props => props.theme.typography.smallText};
  }
  a {
    color: ${props => props.theme.colors.foregroundColor};
    text-decoration: none;
    font-size: ${props => props.theme.typography.paragraphSize};
    font-family: ${props => props.theme.typography.codeFont};
    transition: color .3s ease-in-out;
  }
  p {
    line-height: ${props => props.theme.typography.lineHeight};
  }
`
