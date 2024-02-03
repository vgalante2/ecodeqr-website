import React from 'react';
import styles from "./storyhub.module.css"


function StoryHub() {
    
    return ( 
    
    <section className={styles.storyhub_section}>
    <div className={styles.storyhub_container}>
    <h1 className={styles.storyhub_heading}> Welcome to StoryHub!</h1>
    </div>
    </section>
    
    );
}

export default StoryHub;