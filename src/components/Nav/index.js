import React, {Component} from 'react';
import {Link} from 'react-router';
import styles from './index.css';

class Nav extends Component {
    render() {
        return (
            <ul className={styles.nav}>
                {this.props.navs.map((nav, index) => {
                    return (
                        <li className={styles[nav.alias]}  key={index}>
                            <Link to={nav.path} className={this.props.currentNav === nav.alias ? styles.active : null} onClick={()=>{this.props.setCurrentNav(nav.alias); }}>
                            <i></i>
                            {nav.title}
                            </Link>
                        </li>
                );
                }) }
            </ul>
        );
    }
}

export default Nav;