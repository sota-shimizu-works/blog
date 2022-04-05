import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
                console.log(res);
                setPosts(res.data.contents)
                console.log(posts);
            });
    }, []);
    return (
        <div>
            <ul>
                {
                    posts.map(
                        post =>
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`}>{post.title}</Link>
                            </li>
                    )
                }
            </ul>
        </div>
    )

}

export default Posts