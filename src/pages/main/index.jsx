import { Button, Card } from 'antd';
import { UserOutlined, EyeOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import {useEffect, useState} from "react";
import * as article from '../../api/article'

const Main = () => {
    const [articleList, setArticleList] = useState([])

    const getArticleList = () => {
        article.getArticleList().then(({ data: res }) => {
            if (res.status === 200) {
                // setArticleList((arr) => [articleList, ...res.data])
                setArticleList(res.data)
            }
        })
    }

    useEffect(() => {
        getArticleList()
    }, [])

    return (
        <main style={{ width: '800px', margin: '20px auto' }}>
            {articleList.map(a => (
                <Card style={{ width: '100%', marginTop: '10px' }} key={a.id}>
                    <section style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Avatar src={a.avatar} size={64} icon={<UserOutlined />} />
                        <Button shape="round">关注</Button>
                    </section>
                    <p>{a.title}</p>
                    <section style={{ width: '200px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <EyeOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                        <MessageOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                        <LikeOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
                    </section>
                </Card>
            ))}
        </main>
    )
};

export default Main;
