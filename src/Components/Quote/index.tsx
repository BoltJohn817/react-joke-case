import styles from './index.module.css';

export default ({children, type}: any) => {
    return (
    <div className={styles.quote}>
        <div className={styles.quote_mark}></div>
        <div className={styles.text}>{children}</div>
    </div>);
}