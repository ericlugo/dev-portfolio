import React from "react"
import styled from "styled-components"
import { FiFeather } from "react-icons/fi"

import MainNav from "../miscellaneous/MainNav"
import SocialNav from "../miscellaneous/SocialNav"

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="widthContainer">
      <MainNav />
      <SocialNav />
      <div className="credit">
        Icons courtesy of:{" "}
        <a href="https://feathericons.com/">
          <div>
            <FiFeather />
            FeatherIcons
          </div>
        </a>
      </div>
      <div className="copy">
        <h6>
          copyright &copy; Eric SarragaLugo {new Date().getFullYear()}
          <br />
          all rights reserved
        </h6>
      </div>
    </div>
  </footer>
)

export default styled(Footer)`
  margin-top: auto;
  padding: 1rem 0.25rem 2rem;
  background-color: ${props => props.theme.colors.foregroundColor};
  color: ${props => props.theme.colors.backgroundColor};
  box-shadow: ${props => props.theme.effects.shadow};

  .widthContainer {
    display: grid;
    grid-template-areas:
      "links  links  social"
      "credit credit credit"
      "copy   copy   copy";
    grid-template-columns: 1fr 1fr;

    @media (min-width: ${props => props.theme.breakpoints.xs}) {
      grid-template-areas:
        "links links social credit credit"
        "links links social copy   copy";
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

      .credit,
      .copy {
        margin-left: 1rem;
        text-align: right;
      }
    }
  }
  .links {
    grid-area: links;

    a {
      color: ${props => props.theme.colors.accentLight};

      &:hover,
      &:active {
        color: ${props => props.theme.colors.backgroundColor};
      }
    }
  }
  .social {
    padding-right: 0.25rem;
    grid-area: social;
    display: grid;
    grid-template-areas:
      ". ."
      ". .";
    text-align: right;
    line-height: 50%;

    a {
      color: ${props => props.theme.colors.accentLight};

      &:hover,
      &:active {
        color: ${props => props.theme.colors.backgroundColor};
      }
    }
  }
  .credit {
    grid-area: credit;
    text-align: center;
    margin-top: 0.5rem;

    a {
      color: ${props => props.theme.colors.backgroundColor};

      div {
        display: inline-block;
        text-align: center;
      }
    }
  }
  .copy {
    grid-area: copy;
    text-transform: uppercase;
    margin-top: 0.5rem;
    text-align: center;
  }
`
