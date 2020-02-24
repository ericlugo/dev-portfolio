import React from "react"
import styled from "styled-components"
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

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 0 0.5rem;
    }
  }
`

export const AppWrapper = ({ className, children }) => (
  <ThemeProvider>
    <GlobalStyle />
    <Main className={className}>{children}</Main>
  </ThemeProvider>
)

export default ({ children }) => (
  <AppWrapper>
    <Header size={3} />
    {children}
    <Footer />
  </AppWrapper>
)
