import styles from '../css/sidebar.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";



const Sidebar = () => {
    const [user, setUser] = useState([]);
    const iconStyle: React.CSSProperties = { padding: 10, fontSize: 50 };

    useEffect(() => {
        axios.get('https://api.github.com/users/sota-shimizu-works')
            .then(res => {
                console.log(res);
                setUser(res.data)
                console.log(res.data);
            });
    }, []);

    return (
        <nav className={`${styles.sideBar}`}>
            <div className={`${styles.profile}`}>
                <img src={user.avatar_url} />
                <p className={`${styles.name}`}>{user.name}<span>{user.location}</span></p>
            </div>
            <p>

            </p>

            <div className={`${styles.links}`}>
                <a target="blank" href="https://github.com/sota-shimizu-works">
                    <FontAwesomeIcon style={iconStyle} icon={faGithub} />
                </a>
                <a target="blank" href="mailto:shimizu.s.works@gmail.com">
                    <FontAwesomeIcon style={iconStyle} icon={faAt} />
                </a>
            </div>
        </nav>
    )
}

export default Sidebar