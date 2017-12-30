import React from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends React.Component {

    render() {
        return (
            <nav className="menu-block col-md-2 col-xs-12">
                <div id="sidebar"  className="nav-collapse ">
                    <ul className="sidebar-menu" id="nav-accordion">
                        <li>
                            <p className="centered">
                                    <img src="assets/img/ui-sam.jpg" alt="" className="img-circle" width="60" />
                            </p>
                        </li>
                        <li className="menu-item">

                            <NavLink exact to="/" activeClassName="active">
                                <i className="fa fa-book"></i>
                                <span>Shelves</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink exact to="/search" activeClassName="active">
                                <i className="fa fa-search"></i>
                                <span>Search</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Menu