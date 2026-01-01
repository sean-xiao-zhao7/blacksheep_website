import { Link } from "react-router";

import { faLinkedin, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return <footer>
        <div id='left'>
            <h2>LEGAL</h2>
            <p><Link to='/terms'>TERMS & CONDITIONS</Link></p>
            <p><Link to='/privacy'>PRIVACY POLICY</Link></p>
            <p>&copy; 2025 BLACKSHEEP</p>
        </div>
        <div id='middle'>
            <img src='/assets/images/sheep_with_text160x160.png' alt='sheep icon' className="footer-sheep-icon" />
            <div className="store-badges-container">
                <div className="single-store-badge">
                    <a target="_blank" href='https://apps.apple.com/us/app/blacksheep-community/id6755053312'><img src='/assets/images/apple_store_icon.svg' alt='apple store badge' /></a>
                </div>
                <div className="single-store-badge">
                    <a target='_blank' href='https://play.google.com/store/apps/details?id=com.blacksheep.app'>
                        <img src='/assets/images/google_store_icon.png' alt='google play store badge' />
                    </a>
                </div>
            </div>
        </div>
        <div id='right'>
            <h2>CONTACT US</h2>
            {/* <p>SOCIAL MEDIA</p> */}
            <p>contact.us.blacksheep@gmail.com</p>
            <div className="social-media-list">
                <a href='https://www.linkedin.com/in/blacksheep-app/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://www.facebook.com/TheBlackSheepApp' target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.instagram.com/blacksheep.app/' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://www.youtube.com/@TheBlackSheepApp' target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
        </div>
    </footer>
}