import React from "react"
import styled from "styled-components"

import Avatar from "../Avatar"
import Toggle from "../Toggle"

const HeaderWrapper = styled.header`
  .widthContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="widthContainer">
        <Avatar height="3rem" />
        <Toggle />
      </div>
    </HeaderWrapper>
  )
}

export default Header
