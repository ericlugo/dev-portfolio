import React from "react"
import styled from "styled-components"
import { FiMoon, FiSun } from "react-icons/fi"

const Toggle = ({ className, height }) => (
  <div className={className}>
    <FiSun className="icon" />
    <label>
      <input type="checkbox" className="switch" />
      <span className="slider"></span>
    </label>
    <FiMoon className="icon" />
  </div>
)

export default styled(Toggle)`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  .icon {
    color: ${props => props.theme.colors.foregroundColor};
    font-size: 1.5rem;
    padding: 0 0.25rem;
  }
  .switch {
    display: none;
    &:checked ~ .slider {
      background-color: ${props => props.theme.colors.toggle.switchActive};
      &::after {
        left: ${props => props.height};
      }
    }
  }
  .slider {
    height: ${props => props.height};
    width: ${props => props.width};
    display: block;
    border: 2px solid ${props => props.theme.colors.toggle.default};
    border-radius: ${props => props.height};
    background-color: rgba(black, 0.06);
    box-shadow: ${props => props.theme.effects.inset};
    position: relative;
    &::after {
      transition: left 0.3s ease-in-out;
      content: " ";
      height: ${props => props.height};
      width: ${props => props.height};
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
