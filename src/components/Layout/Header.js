import React from "react"
import styled from "styled-components"

import Avatar from "../miscellaneous/Avatar"
import Toggle from "../miscellaneous/Toggle"
import MenuIcon from "../miscellaneous/MenuIcon"

const Header = ({ className, size }) => (
  <header className={className}>
    <div className="widthContainer">
      <Avatar className="avatar" size={[size]} />
      <Toggle />
      {/* <MenuIcon size={[size]} /> */}
    </div>
  </header>
)

export default styled(Header)`
  width: 100%;
  margin: 0 0 0.5rem;

  .widthContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .avatar {
    margin: 0.5rem;
  }
`
