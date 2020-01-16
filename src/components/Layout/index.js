import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import { siteThemes, GlobalStyle } from "../../constants/theme"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [themeName, changeThemeName] = useState("light")
  const { lightTheme, darkTheme } = siteThemes

  return (
    <ThemeProvider theme={themeName === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default Layout
