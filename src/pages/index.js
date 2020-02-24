import React from "react"
import styled, { keyframes } from "styled-components"

import { AppWrapper } from "../components/Layout"
import Header from "../components/Layout/Header"
import MainNav from "../components/miscellaneous/MainNav"
import SocialNav from "../components/miscellaneous/SocialNav"

const glitch1 = keyframes`
  0%   { clip-path: inset(22% 0 34% 0); }
  5%   { clip-path: inset(59% 0 3% 0);  }
  10%  { clip-path: inset(27% 0 36% 0); }
  15%  { clip-path: inset(36% 0 62% 0); }
  20%  { clip-path: inset(38% 0 63% 0); }
  25%  { clip-path: inset(10% 0 14% 0); }
  30%  { clip-path: inset(18% 0 38% 0); }
  35%  { clip-path: inset(35% 0 60% 0); }
  40%  { clip-path: inset(77% 0 8% 0);  }
  45%  { clip-path: inset(61% 0 11% 0); }
  50%  { clip-path: inset(78% 0 11% 0); }
  55%  { clip-path: inset(35% 0 50% 0); }
  60%  { clip-path: inset(22% 0 73% 0); }
  65%  { clip-path: inset(83% 0 4% 0);  }
  70%  { clip-path: inset(84% 0 13% 0); }
  75%  { clip-path: inset(58% 0 13% 0); }
  80%  { clip-path: inset(34% 0 46% 0); }
  85%  { clip-path: inset(86% 0 11% 0); }
  90%  { clip-path: inset(44% 0 7% 0);  }
  95%  { clip-path: inset(4% 0 41% 0);  }
  100% { clip-path: inset(27% 0 4% 0);  }
`

const glitch2 = keyframes`
  0%   { clip-path: inset(62% 0 2% 0);  }
  5%   { clip-path: inset(55% 0 32% 0); }
  10%  { clip-path: inset(24% 0 51% 0); }
  15%  { clip-path: inset(38% 0 10% 0); }
  20%  { clip-path: inset(96% 0 4% 0);  }
  25%  { clip-path: inset(87% 0 13% 0); }
  30%  { clip-path: inset(4% 0 11% 0);  }
  35%  { clip-path: inset(9% 0 85% 0);  }
  40%  { clip-path: inset(87% 0 10% 0); }
  45%  { clip-path: inset(80% 0 10% 0); }
  50%  { clip-path: inset(28% 0 55% 0); }
  55%  { clip-path: inset(79% 0 2% 0);  }
  60%  { clip-path: inset(42% 0 37% 0); }
  65%  { clip-path: inset(29% 0 18% 0); }
  70%  { clip-path: inset(43% 0 23% 0); }
  75%  { clip-path: inset(29% 0 57% 0); }
  80%  { clip-path: inset(16% 0 47% 0); }
  85%  { clip-path: inset(66% 0 32% 0); }
  90%  { clip-path: inset(23% 0 26% 0); }
  95%  { clip-path: inset(78% 0 9% 0);  }
  100% { clip-path: inset(58% 0 16% 0); }
`

const SocialBar = styled(SocialNav)`
  max-width: ${props => props.theme.breakpoints.md};
  margin: 0 10%;
  display: flex;
  justify-content: space-around;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 20%;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 30%;
  }

  a {
    font-size: ${props => props.theme.typography.subHeaderSize};

    svg {
      stroke-width: 1.5px;
    }
  }
`

const HomePage = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  padding: 0.5rem;

  section p {
    margin: 1.5rem 0;
  }

  .glitch {
    display: inline-block;
    font-size: 6rem;
    line-height: 8rem;
    margin: -2rem 0;
    font-weight: 900;
    letter-spacing: 5px;
    position: relative;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      text-shadow: 0.1rem 0 0 ${props => props.theme.colors.accentLight};
      color: ${props => props.theme.colors.foregroundColor};
      animation: ${glitch1} 10s infinite linear alternate-reverse;
    }

    &:after {
      text-shadow: -0.1rem 0 0 ${props => props.theme.colors.accentLight};
      color: ${props => props.theme.colors.foregroundColor};
      animation: ${glitch2} 7.5s infinite linear alternate-reverse;
    }
  }

  .mainNav a {
    font-family: ${props => props.theme.typography.mainFont};
    font-size: ${props => props.theme.typography.subHeaderSize};
    line-height: 2.25rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`

export default () => (
  <AppWrapper>
    <Header size={3} />
    <HomePage className="widthContainer">
      <section>
        <h1>
          Hi, I'm{" "}
          <span data-text="Eric" className="glitch">
            Eric
          </span>
          .
        </h1>
        <p>
          A full-stack developer with a passion for making intentional,
          inspiring, and user-focused software. I'm in love with creating clean
          and well though out code that brings beautiful products to life. I
          yearn to learn, hold software craftsmanship and UX design in high
          regard, and I highly value the confidence that clean code brings to
          the table. Tap or Click below to check out some of my work and get in
          touch with me!
        </p>
        <MainNav className="mainNav" />
      </section>
    </HomePage>
    <SocialBar />
  </AppWrapper>
)
