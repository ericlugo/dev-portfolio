import React from "react"
import styled from "styled-components"
import { Location } from "@reach/router"

import { ThemeContext } from "../../constants/theme.js"
import Avatar from "../miscellaneous/Avatar"
import Toggle from "../miscellaneous/Toggle"
import MenuIcon from "../miscellaneous/MenuIcon"

const Header = ({ className, size }) => (
  <ThemeContext.Consumer>
    {({ dark, fresh }) => (
      <Location>
        {({ location: { pathname: currentPath } }) => (
          <header className={className}>
            <div className="widthContainer">
              <Avatar
                className="avatar"
                size={size}
                dark={dark}
                fresh={fresh}
              />
              <div className="menu">
                <Toggle />
                {currentPath !== "/" && (
                  <MenuIcon className="menuIcon" size={[size]} />
                )}
              </div>
            </div>
          </header>
        )}
      </Location>
    )}
  </ThemeContext.Consumer>
)

export default styled(Header)`
  width: 100%;
  padding: 0.5rem 0;

  .widthContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    align-items: center;

    .menuIcon {
      margin-left: 1rem;
    }
  }
`
