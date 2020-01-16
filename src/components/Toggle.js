import React from "react"
import styled from "styled-components"
import { FiMoon, FiSun } from "react-icons/fi"

// NOTE: The below units are in rem
const switchHeight = 1.5
const switchWidth = switchHeight * 2
const slideDiameter = switchHeight

const Toggle = ({ className }) => (
  <div className={className}>
    <div className="container">
      <FiSun className="icon" />
      <label>
        <input type="checkbox" className="switch" />
        <span className="slider inset"></span>
      </label>
      <FiMoon className="icon" />
    </div>
  </div>
)

export default styled(Toggle)`
  display: inline-block;

  .container {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.25rem;
  }
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
        left: 1.5rem;
      }
    }
  }
  .slider {
    height: ${switchHeight}rem;
    width: ${switchWidth}rem;
    display: block;
    border: 2px solid ${props => props.theme.colors.toggle.default};
    border-radius: ${switchHeight}rem;
    background-color: rgba(black, 0.06);
    position: relative;
    &::after {
      transition: left 0.3s ease-in-out;
      content: " ";
      height: ${slideDiameter}rem;
      width: ${slideDiameter}rem;
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
