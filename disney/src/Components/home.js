import React from 'react';

import Nav from './Nav';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
    return (
        <div>
            <Header>
                < Nav />
            </Header >
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;