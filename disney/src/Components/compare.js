import React, {useState} from 'react';

import Profile from './profile';
import Nav from './Nav';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content} = Layout;


function Compare(props) {

    const [city, setCity] = useState();

    return (
        <div>
            
        <Layout>
            <Header>
                < Nav />
            </Header>
            <Content>Maps</Content>
            
                <Sider>
                    <h3>Comparison</h3>
                    < Profile />
                    <Content>
                        <h3>

                        </h3>
                    </Content>
                </Sider>
            
            <Footer>
                <h3>Citrics</h3>
            </Footer>
        </Layout>
        </div>
    );
}

export default Compare;