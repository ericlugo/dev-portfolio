import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import navLinks from "../../constants/navLinks"

const MainNav = ({ className }) => (
  <div className={`${className} links`}>
    {navLinks.map((item, index) => (
      <AniLink key={index} fade to={item.path}>
        > {item.text}
      </AniLink>
    ))}
  </div>
)

export default styled(MainNav)`
  a {
    display: block;
    color: ${props => props.theme.colors.accentDark};
    line-height: 1.25rem;
    text-transform: uppercase;

    &:hover,
    &:active {
      color: ${props => props.theme.colors.accentLight};
    }
  }
`
