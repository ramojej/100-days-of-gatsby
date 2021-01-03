import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const EachLocation = ({ data }) => {
  //console.log(data)
  return (
    <Layout>
      <div className="container px-4 mx-auto mt-8 h-screen">
        <h2 className="text-2xl font-semibold">{data.wpArea.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: data.wpArea.content }}
          class="content mt-4"
        />
        <Link to="/locations/" className="mt-4 block text-blue-500">
          Back to Locations
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    wpArea(id: { eq: $id }) {
      title
      content
    }
  }
`

export default EachLocation
