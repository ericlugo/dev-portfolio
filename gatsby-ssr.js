import "typeface-anton"
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-mono"

import React from "react"
import Layout from "./src/components/Layout"

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
