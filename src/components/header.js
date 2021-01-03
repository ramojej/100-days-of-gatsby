import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Menu from "./Menu"

const Header = ({ siteTitle }) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        menuItems {
          nodes {
            id
            label
            connectedNode {
              node {
                uri
              }
            }
          }
        }
      }
    }
  `)
  return (
    <header className="bg-blue-500">
      <div className="container px-4 py-6 flex justify-between">
        <h1 className="text-xl">
          <Link to="/" className="text-white">
            {siteTitle}
          </Link>
        </h1>
        <Menu menu={wpMenu} />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
