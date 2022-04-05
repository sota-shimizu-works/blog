import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

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
        <div>
            <h2>{post.title}</h2>
            <div><span>{post.publish_datetime}</span></div>
            <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </div>
    )
}

export default Post;