import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const BasicPage = ({
  data: {
    wpPage: { title, content },
  },
}) => {
  return (
    <Layout>
      <div className="container px-4 mx-auto mt-8 h-screen">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="content mt-4"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

export default BasicPage
