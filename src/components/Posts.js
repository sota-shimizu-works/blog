import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/posts.module.scss';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://elszdx8wl4.microcms.io/api/v1/blogs', {
            headers: {
                'Content-type': 'application/json',
                'X-MICROCMS-API-KEY': process.env.REACT_APP_API_KEY
            }
        })
            .then(res => {
                setPosts(res.data.contents)
            });
    }, []);
    return (
        <div className={`${styles.postsWrapper}`}>
            <ul>
                {
                    posts.map(
                        post =>
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`}>
                                    <h2>{post.title}</h2>
                                    <p className={`${styles.date}`}>
                                        {dayjs.utc(post.publishedAt).tz('Asia/Tokyo').format('dddd, MMMM DD YYYY')}
                                    </p>
                                    <div className={`${styles.body}`} dangerouslySetInnerHTML={{ __html: post.body }}>
                                    </div>
                                </Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )

}
export default Posts