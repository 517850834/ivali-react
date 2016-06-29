import React, {Component} from 'react';
import {Link} from 'react-router';
class Nav extends Component {
    render() {
        return (
            <ul className="ul">
                {this.props.navs.map((nav, index) => {
                    return (
                        <li className={nav.alias} key={index}>
                            <Link to={nav.path} activeClassName="active">{nav.title}</Link>
                        </li>
                    );
                }) }
            </ul>
        );
    }
}

export default Nav;