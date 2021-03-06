import React, {Component} from 'react';
import pubStyles from'../public.css';
import styles from './index.css';

class Home extends Component {
    render() {
        return (
            <div className={pubStyles.item}>
                <div className={pubStyles.banner +' '+ styles.banner}></div>
                <div className={pubStyles.main}>
                    <div className={pubStyles.title}>
                        <h2>公司简介</h2>
                        <span>About us</span>
                    </div>
                    <div className={pubStyles.content}></div>
                </div>
            </div>
        );
    }
}

export default Home;