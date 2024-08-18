import styles from './Herostyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/icons8-instagram (1).svg';
import instaDark from '../../assets/icons8-instagram-50.png';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import LinkedInDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/harshavardhangs_resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {

    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme ==='light'? sun:moon;
    const instaIcon = theme ==='light'? instaLight:instaDark;
    const githubIcon= theme ==='light'? githubLight:githubDark;
    const LinkedIcon = theme ==='light'?linkedinLight:LinkedInDark;

  return (
    <section id="hero" className={styles.Container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile-harshavardhangs" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>

            <h1>Harsha Vardhan G S</h1>
            <h2>Software Engineer</h2>
            <span>
                <a href="https://www.instagram.com/harshavardhangs4179?igsh=MXc4cTk3bWxoaG9mZQ==" target='_blank'>
                <img src={instaIcon} alt="instagram_icon" />
                </a>
                <a href="http://github.com" target='_blank'>
                <img src={githubIcon} alt="github_icon" />
                </a>
                <a href="https://www.linkedin.com/in/harsha-vardhan-g-s-536860218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'>
                <img src={LinkedIcon} alt="linkedin_icon" />
                </a>
            </span>
            <p className={styles.description}>As a dedicated software engineer, I aim to contribute my technical expertise and innovative thinking to an organization that values growth and excellence. I am eager to leverage my knowledge and skills in software development to solve complex problems, collaborate with a talented team, and drive the organization towards achieving its goals. My passion for technology and continuous learning fuels my commitment to delivering high-quality solutions and staying at the forefront of industry advancements.</p>
            <a href={CV}><button className="hover" download>Resume</button></a>
        </div>
    </section>
  )
}

export default Hero;