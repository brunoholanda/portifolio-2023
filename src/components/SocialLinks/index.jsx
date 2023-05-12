import styles from './SocialLinks.module.scss';

export default function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/brunoholanda" target="_blank" rel="noreferrer">
            <div className={styles.socialLinks__git}></div>
            </a>
            <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank" rel="noreferrer">
            <div className={styles.socialLinks__li}></div>
            </a>
            <a href="https://wa.me/5583998150712" target="_blank" rel="noreferrer">
                <div className={styles.socialLinks__wp}></div>
            </a>
        </div>
    )
}