import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Location } from "@reach/router"

import navLinks from "../../constants/navLinks"

const FadeLink = ({ item }) => (
  <AniLink
    fade
    to={item.path}
    onClick={() => localStorage.setItem("fresh", JSON.stringify(false))}
  >
    > {item.text}
  </AniLink>
)

const MainNav = ({ className }) => (
  <Location>
    {({ location: { pathname: currentPath } }) => (
      <div className={`${className} links`}>
        {navLinks.map((item, index) => {
          if (currentPath === "/") {
            if (item.text !== "home")
              return <FadeLink key={index} item={item} />
          } else if (currentPath !== "/" + item.text)
            return <FadeLink key={index} item={item} />
        })}
      </div>
    )}
  </Location>
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
