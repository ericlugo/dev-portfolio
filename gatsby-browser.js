import "typeface-anton"
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-mono"

import React from "react"
import Layout from "./src/components/Layout"
import { ThemeProvider, GlobalStyle } from "./src/constants/theme.js"

// Wraps root component to set providers
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <GlobalStyle />
    {element}
  </ThemeProvider>
)

// Wraps every page in a component with components that we don't want to reload.
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
