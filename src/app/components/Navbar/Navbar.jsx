"use client"
import React from 'react';

import Link from 'next/link';
import styles from "../../styles/Navbar/navbar.module.css";


function Navbar() {
  
    return (
        <div className={styles.nav_section}>
            <img className={styles.logo} src="./ecodelogo.webp" />
            <nav className={styles.nav}>
            <ul>
            <Link href="/">
            <li className={styles.nav_item}>HOME</li>
             </Link>
            <Link href="/storyhub">
             <li className={styles.nav_item}>StoryHub</li>
            </Link>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar;



