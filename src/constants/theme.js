import { createGlobalStyle, css } from "styled-components"
import reset from "styled-reset"

const palettes = {
  paletteNo1: {
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
    fontBase: "100%", //around 16px, but can be overwritten in browser settings
    headerSize: "2.827rem", //around 45px
    subHeaderSize: "1.999rem", //around 32px
    sectionSize: "1.414rem", //around 23px
    paragraphSize: "1rem", //around 16px, same as fontBase
    smallText: "0.707rem", //around 11px
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

export const siteThemes = {
  lightTheme: {
    ...baseTheme,
    colors: {
      backgroundColor: palettes.paletteNo1.background,
      foregroundColor: palettes.paletteNo1.foreground,
      accentDark: palettes.paletteNo1.accentDark,
      accentLight: palettes.paletteNo1.accentLight,
      avatar: {
        bg1: palettes.paletteNo1.accentLight,
        bg2: palettes.paletteNo1.accentLight,
        main: palettes.paletteNo1.foreground,
        accent: palettes.paletteNo1.accentDark,
      },
      toggle: {
        default: palettes.paletteNo1.background,
        switchActive: palettes.paletteNo1.accentLight,
        notchActive: palettes.paletteNo1.accentDark,
      },
    },
    effects: {
      shadow:
        ".3rem .3rem .5rem rgba(0,0,0,0.5), .3rem -.3rem .5rem rgba(250,250,250,0.5), -.3rem .3rem .5rem rgba(250,250,250,0.5), -.3rem -.3rem .5rem rgba(255,255,255,0.7)",
      inset:
        "inset -.3rem -.3rem .5rem rgba(255,255,255,0.7), inset -.3rem .3rem .3rem rgba(150,150,150,0.5), inset .3rem -.3rem .3rem rgba(150,150,150,0.5), inset .3rem .3rem .5rem rgba(0,0,0,0.5)",
      toggleSwitchShadow:
        "inset -.1rem -.1rem .3rem rgba(0,0,0,0.3), inset .1rem -.1rem .3rem rgba(250,250,250,0.3), inset -.1rem .1rem .3rem rgba(250,250,250,0.3), inset .1rem .1rem .3rem rgba(255,255,255,0.5), .1rem .1rem .3rem rgba(0,0,0,0.3)",
    },
  },
  darkTheme: {
    ...baseTheme,
    colors: {
      backgroundColor: palettes.paletteNo3.background,
      foregroundColor: palettes.paletteNo3.foreground,
      accentDark: palettes.paletteNo3.accentDark,
      accentLight: palettes.paletteNo3.accentLight,
      avatar: {
        bg1: palettes.paletteNo3.accentDark,
        bg2: palettes.paletteNo3.accentLight,
        main: palettes.paletteNo3.foreground,
        accent: palettes.paletteNo3.foreground,
      },
      toggle: {
        default: palettes.paletteNo3.background,
        switchActive: palettes.paletteNo3.accentLight,
        notchActive: palettes.paletteNo3.accentDark,
      },
    },
    effects: {
      shadow:
        ".3rem .3rem .5rem rgba(0,0,0,0.3), .3rem -.3rem .5rem rgba(50,50,50,0.15), -.3rem .3rem .5rem rgba(50,50,50,0.15), -.3rem -.3rem .5rem rgba(100,100,100,0.3)",
      inset:
        "inset -.3rem -.3rem .5rem rgba(100,100,100,0.3), inset -.3rem .3rem .3rem rgba(50,50,50,0.15), inset .3rem -.3rem .3rem rgba(50,50,50,0.15), inset .3rem .3rem .5rem rgba(0,0,0,0.3)",
      toggleSwitch:
        ".1rem .1rem .3rem rgba(0,0,0,0.1), .1rem -.1rem .3rem rgba(50,50,50,0.05), -.1rem .1rem .3rem rgba(50,50,50,0.05), -.1rem -.1rem .3rem rgba(100,100,100,0.15)",
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    transition: all .3s ease-in-out;
  }
  body {
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.foregroundColor};
    font-size: ${props => props.theme.typography.fontBase};
    font-weight: 400;
    font-family: ${props => props.theme.typography.mainFont};
  }
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-family: ${props => props.theme.typography.headerFont};
    font-size: ${props => props.theme.typography.headerSize}
  }
  h2 {
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
  }
  p {
    line-height: ${props => props.theme.typography.lineHeight};
  }
  .raised {
  }
  .inset {
  }
  .widthContainer {
  }
`

export const raised = css`
  margin: 0.5rem;
  border-radius: 1rem;
  box-shadow: ${props => props.theme.effects.shadow};
`
export const inset = css`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.effects.inset};
`
export const maxWidth = css`
  margin: 0 auto;
  max-width: 1200px;
`
