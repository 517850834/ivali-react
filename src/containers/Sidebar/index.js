import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from '../../components/Nav';
import styles from './index.css';

class Sidebar extends Component {
    render() {
        return (
            <div className={styles.sidebar}>
                <h1>
                    <Link to="/">瓦力科技</Link>
                </h1>
                <Nav {...this.props}/>
                <div className={styles.copyright}>
                    <div>
                        <p>证劵代码：832638</p>
                        <p>证劵名称：瓦力科技</p>
                    </div>
                    <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备12043897号-3</a>
                    <p>&copy; Copyright 2014 瓦力科技</p>
                </div>
            </div>
        );
    }
}

export default Sidebar;