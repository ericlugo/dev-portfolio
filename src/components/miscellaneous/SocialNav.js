import React from "react"
import styled from "styled-components"

import socialLinks from "../../constants/socialLinks"

const SocialNav = ({ className }) => (
  <div className={className}>
    {socialLinks.map((item, index) => (
      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
        {item.icon}
      </a>
    ))}
  </div>
)

export default styled(SocialNav)`
  a {
    display: inline-block;
    color: ${props => props.theme.colors.accentDark};

    &:hover,
    &:active {
      color: ${props => props.theme.colors.accentLight};
    }
    svg {
      stroke-width: 1px;
    }
  }
`
