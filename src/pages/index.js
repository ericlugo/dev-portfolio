import React from "react"

import "../sass/globalStyles.sass"

import Layout from "../components/Layout"
import Avatar from "../components/Avatar"
import Toggle from "../components/Toggle"

export default () => (
  <Layout>
    <h1>Hello World</h1>
    <Avatar height="14rem" width="10rem" />
    <Toggle />
  </Layout>
)
