const path = require("path")

const query = `
{
  allWpPage {
    nodes {
      uri
      id
      isFrontPage
    }
  }
  allWpArea {
    nodes {
      id
      slug
    }
  }
}
`

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    ${query}
  `)

  if (!data) return null

  data.allWpPage.nodes.forEach(page => {
    const { isFrontPage } = page
    const uri = isFrontPage ? `/` : page.uri

    actions.createPage({
      path: uri,
      component: path.resolve("./src/templates/BasicPage.js"),
      context: {
        id: page.id,
      },
    })
  })

  data.allWpArea.nodes.forEach(area => {
    actions.createPage({
      path: `/locations/${area.slug}`,
      component: path.resolve("./src/templates/EachLocation.js"),
      context: {
        id: area.id,
      },
    })
  })
}
