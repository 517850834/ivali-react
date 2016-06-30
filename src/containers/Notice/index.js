import React, {Component} from 'react';
import pubStyles from '../public.css';
import styles from './index.css';

class Notice extends Component {
    render() {
        return (
            <div className={pubStyles.item}>
                <div className={pubStyles.banner + ' ' + styles.banner}></div>
                <div className={pubStyles.main}>
                    <div className={pubStyles.title + ' ' + styles.title}>
                        <h2>投资者关系</h2>
                        <span>Investors</span>
                    </div>
                    <div className={pubStyles.content}></div>
                </div>
            </div>
        );
    }
}

export default Notice;