import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/post.module.scss';

function Post() {
    const params = useParams();
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get('https://elszdx8wl4.microcms.io/api/v1/blogs/' + params.postId, {
            headers: {
                'Content-type': 'application/json',
                'X-MICROCMS-API-KEY': process.env.REACT_APP_API_KEY
            }
        })
            .then(res => {
                setPost(res.data)
            });
    }, []);

    return (
        <div className={`${styles.postWrapper}`}>
            <h1>{post.title}</h1>
            <div className={`${styles.bodyWrapper}`} dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </div>
    )
}

export default Post;