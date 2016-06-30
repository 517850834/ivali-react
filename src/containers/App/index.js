import React, {Component} from 'react';
import styles from './index.css';
import Sidebar from '../Sidebar';
import Content from '../Content';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                {
                    title: '关于我们',
                    alias: 'home',
                    path: '/home'
                },
                {
                    title: '企业文化',
                    alias: 'company',
                    path: '/company'
                },
                {
                    title: '公司动态',
                    alias: 'news',
                    path: '/news'
                },
                {
                    title: '加入我们',
                    alias: 'join',
                    path: '/join'
                },
                {
                    title: '联系我们',
                    alias: 'contact',
                    path: '/contact'
                },
                {
                    title: '投资者关系',
                    alias: 'notice',
                    path: '/notice'
                }
            ],
            currentNav: 'home',
            setCurrentNav: (nav)=>{
                this.setState({
                    currentNav: nav
                });
            }
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <Sidebar {...this.state}/>
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}

export default App;