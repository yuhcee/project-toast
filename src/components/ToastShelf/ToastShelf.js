import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ shelves }) {
    return (
        <ol className={styles.wrapper}>
            {shelves.map(({ id, variant, message, onClose }) => {
                return (
                    <li key={id}>
                        <Toast variant={variant} message={message} onClose={onClose} />
                    </li>
                );
            })}
        </ol>
    );
}

export default ToastShelf;
