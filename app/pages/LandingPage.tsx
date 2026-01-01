import { Link } from "react-router";

import { faLinkedin, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LandingPage() {
    return <main id='landing-page-container'>
        <div className="intro-container">
            <h1>We all need supportive community.<br /><br />
                If you live in the Mississauga area, get connected today!</h1>
            <Link to='/learn-more' className="emphasis">Learn More</Link>
        </div>
        <div id='videos-section-container' className="section-container">
            <div id='videos-section-container-top-ellipse' className="ellipse"></div>
            <div id='videos-items-container'>
                <div className="video">
                    <video loop autoPlay muted>
                        <source src="/assets/videos/appstore_video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
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
            <div className="social-media-list">
                <a href='https://www.linkedin.com/in/blacksheep-app/' target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://www.facebook.com/TheBlackSheepApp' target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href='https://www.instagram.com/blacksheep.app/' target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href='https://www.youtube.com/@TheBlackSheepApp' target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
            <div id='videos-section-container-bottom-ellipse' className="ellipse"></div>
        </div>
        <div id='blog-section-container' className="section-container">
            <h2>Why does community matter?</h2>
            <p>Increase your knowledge on the benefits of spiritual community by following our monthly blog.</p>
            <div id='blog-items-container'>
                <div className="blog-item">
                    <Link to='/blogs/plurality'>
                        <img src='/assets/images/plurality_in_biblical_oneness.png' alt='mercy' />
                        <h3>Plurality in Biblical Oneness</h3>
                    </Link>
                </div>
                <div className="blog-item">
                    <Link to='/blogs/storytelling'>
                        <img src='/assets/images/the_art_of_storytelling2.png' alt='oneness' />
                        <h3>The Art of Storytelling</h3>
                    </Link>
                </div>
                <div className="blog-item">
                    <Link to='/blogs/mercy'>
                        <img src='/assets/images/commentary_on_mercy.jpg' alt='art' />
                        <h3>A Commentary On Mercy</h3>
                    </Link>
                </div>
            </div>
        </div>
    </main >
}