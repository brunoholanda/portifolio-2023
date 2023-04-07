import github from '../../public/assets/icons/github.svg';
import linkedin from '../../public/assets/icons/linkedin.svg';
import whats from '../../public/assets/icons/wp.png';
import styles from './SocialLinks.module.scss';

export default function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/brunoholanda" target="_blank">
                <img src={github} alt="icone do github" />
            </a>
            <a href="https://www.linkedin.com/in/brunoholanda/" target="_blank">
                <img src={linkedin} alt="icone do linkedin" />
            </a>
            <a href="https://wa.me/5583998150712" target="_blank">
                <img src={whats} alt="icone do linkedin" />
            </a>
        </div>
    )
}