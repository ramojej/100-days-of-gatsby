import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Menu = ({ menu }) => {
  //console.log(menu)
  return (
    <ul className="flex main-menu">
      {menu.menuItems.nodes.map(menuItem => {
        return (
          <li key={menuItem.id}>
            <Link
              to={menuItem.connectedNode.node.uri}
              className="text-white"
              activeClassName="text-blue-200"
            >
              {menuItem.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

Menu.propTypes = {
  menu: PropTypes.object.isRequired,
}

export default Menu
