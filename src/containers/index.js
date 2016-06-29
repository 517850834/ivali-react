import React, {Component} from 'react';
import './index.css';

import Nav from '../components/Nav';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [
                {
                    title: '公司简介',
                    path: '/home',
                    alias: 'home'
                },
                {
                    title: '企业文化',
                    path: '/company',
                    alias: 'company'
                },
                {
                    title: '公司动态',
                    path: '/news',
                    alias: 'news'
                },
                {
                    title: '加入我们',
                    path: '/join',
                    alias: 'join'
                },
                {
                    title: '联系我们',
                    path: '/contact',
                    alias: 'contact'
                },
                {
                    title: '投资者关系',
                    path: '/notice',
                    alias: 'notice'
                }
            ]
        };
    }
    render() {
        return (
            <div className="container">
                <div className="sidebar">
                    <h1>
                        <a href="/">瓦力科技</a>
                    </h1>
                    <Nav navs={this.state.navs}/>
                    <div className="copyright">
                        <div className="stock">
                            <p className="line">证券代码：832638</p>
                            <p>证券名称：瓦力科技</p>
                        </div>
                        <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备12043897号-3</a>
                        <p>© Copyright 2014 瓦力科技</p>
                    </div>
                </div>
                <div className="content">
                    <div className="partner">
                        <h2>合作伙伴</h2>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;