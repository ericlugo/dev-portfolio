import React from "react"
import styled from "styled-components"

import Header from "./Header"

const headerSize = 3

const AppWrapper = styled.div`
  height: 100%;

  main {
    padding-top: ${headerSize + 2}rem;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }

  .widthContainer {
    margin: 0 auto;
    width: 100%;
    max-width: ${props => props.theme.breakpoints.md};

    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding: 0 0.5rem;
    }
  }
`

export default ({ className, children }) => (
  <AppWrapper className={className}>
    <Header size={headerSize} />
    {children}
  </AppWrapper>
)
