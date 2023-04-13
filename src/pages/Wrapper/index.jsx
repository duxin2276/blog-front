import { Layout } from 'antd';
import React from 'react';
import './index.css';
import Main from '../main';
const { Header, Content } = Layout;

function Wrapper() {
    return (
        <>
            <Layout>
                <Header theme="light">导航部分</Header>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </>
    );
}

export default Wrapper;
