import React from 'react';
import Button from '../Button';
import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
    const [message, setMessage] = React.useState('');
    const [isOpen, setIsOpen] = React.useState(false);

    const handlePopToast = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div className={styles.wrapper}>
                <header>
                    <img alt="Cute toast mascot" src="/toast.png" />
                    <h1>Toast Playground</h1>
                </header>

                {isOpen && (
                    <Toast
                        variant={variant}
                        message={message}
                        onClose={() => {
                            setIsOpen(false);
                        }}
                    />
                )}

                <div className={styles.controlsWrapper}>
                    <div className={styles.row}>
                        <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id="message"
                                className={styles.messageInput}
                                value={message}
                                onChange={(event) => {
                                    setMessage(event.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                            {VARIANT_OPTIONS.map((option, index) => {
                                return (
                                    <label htmlFor={`variant-${option}`} key={index}>
                                        <input
                                            id={`variant-${option}`}
                                            type="radio"
                                            name="variant"
                                            value={option}
                                            checked={variant === option}
                                            onChange={(event) => {
                                                setVariant(event.target.value);
                                            }}
                                        />
                                        {option}
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
                            <Button onClick={handlePopToast}>Pop Toast!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ToastPlayground;
