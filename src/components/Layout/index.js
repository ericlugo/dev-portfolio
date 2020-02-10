import React from "react"
import styled from "styled-components"
import { Location } from "@reach/router"
import { ThemeProvider, GlobalStyle } from "../../constants/theme.js"

import Header from "./Header"
import Footer from "./Footer"

const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  .widthContainer {
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.md};
  }
`

export const AppWrapper = ({ className, children }) => (
  <ThemeProvider>
    <GlobalStyle />
    <Location>
      {({ location: { pathname: currentPath } }) => (
        <Main path={currentPath} className={className}>
          {children}
        </Main>
      )}
    </Location>
  </ThemeProvider>
)

export default ({ children }) => (
  <AppWrapper>
    <Header size={3} />
    {children}
    <Footer />
  </AppWrapper>
)
