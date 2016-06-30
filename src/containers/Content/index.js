import React, {Component} from 'react';
import styles from './index.css';

class Content extends Component {
    render() {
        return (
            <div className={styles.content}>
                {this.props.children}
                <div className={styles.partner}>
                    <h2>合作伙伴</h2>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Content;