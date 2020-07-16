import React from "react"
import styled from "styled-components"

import SocialNav from "./SocialNav"

export default styled(SocialNav)`
  max-width: ${props => props.theme.breakpoints.md};
  margin: 0 10%;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 20%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 30%;
  }

  a {
    font-size: ${props => props.theme.typography.subHeaderSize};

    svg {
      stroke-width: 1.5px;
    }
  }
`
