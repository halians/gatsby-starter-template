import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero showPerson />
  </Layout>
)

export default IndexPage
