import styles from './NotFound.module.css'

function NotFoundPage() {
  return (
    <div className={styles['notfound-box']}>
        <div className={styles['error-box']}>
            <span className={styles['type-error']}>404</span>
            <div className={styles['notfound-text-box']}>
                <h1 className={styles['notfound']}>Page not found</h1>
            </div>
            <div className={styles['link-box']}>
                <a href="/" className={styles['toHome']}>Return to home page</a>
            </div>
        </div>
    </div>
  )
}

export default NotFoundPage