import React from "react"
import styled from "styled-components"
import { FiMoon, FiSun } from "react-icons/fi"

import { ThemeContext } from "../../constants/theme.js"

const toggleSize = 3

const Toggle = ({ className }) => (
  <ThemeContext.Consumer>
    {({ dark, toggle }) => (
      <div className={className}>
        <FiSun className="icon" />
        <label>
          <input
            type="checkbox"
            checked={dark}
            className="switch"
            onChange={toggle}
          />
          <span className="slider"></span>
        </label>
        <FiMoon className="icon" />
      </div>
    )}
  </ThemeContext.Consumer>
)

export default styled(Toggle)`
  display: flex;
  align-items: center;

  .icon {
    color: ${props => props.theme.colors.foregroundColor};
    font-size: ${toggleSize / 2}rem;
    margin: 0 0.5rem;
  }
  .switch {
    display: none;
    &:checked ~ .slider {
      &::after {
        left: ${toggleSize / 2}rem;
      }
    }
  }
  .slider {
    height: ${toggleSize / 2}rem;
    width: ${toggleSize}rem;
    display: block;
    border-radius: ${toggleSize / 2}rem;
    background-color: rgba(black, 0.06);
    box-shadow: ${props => props.theme.effects.inset};
    position: relative;
    &::after {
      transition: left 0.3s ease-in-out;
      content: "";
      height: ${toggleSize / 2}rem;
      width: ${toggleSize / 2}rem;
      display: block;
      background-color: ${props => props.theme.colors.toggle.notchActive};
      border-radius: 50%;
      box-shadow: ${props => props.theme.effects.toggleSwitchShadow};
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
