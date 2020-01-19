import React from "react"
import styled from "styled-components"

import Avatar from "../Avatar"
import Toggle from "../Toggle"

const Header = ({ className }) => {
  return (
    <header className={className}>
      <div className="widthContainer">
        <Avatar size="3rem" />
        <Toggle height="1.5rem" width="3rem" />
      </div>
    </header>
  )
}

export default styled(Header)`
  width: 100%;
  margin: 0 0 0.5rem;
  box-shadow: ${props => props.theme.effects.shadow};

  .widthContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
