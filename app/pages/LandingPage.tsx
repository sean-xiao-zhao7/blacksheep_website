import { Link } from "react-router";

export default function LandingPage() {
    return <main id='landing-page-container'>
        <div className="intro-container">
            <h1>We all need supportive community.<br /><br />
                If you live in the Mississauga area, get connected today!</h1>
            <Link to='/learn-more' className="emphasis">LEARN MORE</Link>
        </div>
        <div id='videos-section-container' className="section-container">
            <div id='videos-section-container-top-ellipse' className="ellipse"></div>
            <div id='videos-items-container'>
                <div className="video">
                    <video loop autoPlay muted>
                        <source src="/assets/videos/video1.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="video">
                    <video loop autoPlay muted>
                        <source src="/assets/videos/video2.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <p>COMING SOON</p>
            <div className="store-badges-container">
                <div className="single-store-badge">
                    <img src='/assets/images/apple_store_icon.svg' alt='apple store badge' />
                </div>
                <div className="single-store-badge">
                    <img src='/assets/images/google_store_icon.png' alt='google play store badge' />
                </div>
            </div>
            <div id='videos-section-container-bottom-ellipse' className="ellipse"></div>
        </div>
        <div id='blog-section-container' className="section-container">
            <h2>WHY DOES COMMUNITY MATTER?</h2>
            <p>Increase your knowledge on the benefits of spiritual community by following our monthly blog.</p>
            <div id='blog-items-container'>
                <div className="blog-item">
                    <Link to='/blogs/plurality'>
                        <img src='/assets/images/plurality_in_biblical_oneness.png' alt='mercy' />
                        <h3>PLURALITY IN BIBLICAL ONENESS</h3>
                    </Link>
                </div>
                <div className="blog-item">
                    <Link to='/blogs/storytelling'>
                        <img src='/assets/images/the_art_of_storytelling2.png' alt='oneness' />
                        <h3>THE ART OF STORYTELLING</h3>
                    </Link>
                </div>
                <div className="blog-item">
                    <Link to='/blogs/mercy'>
                        <img src='/assets/images/commentary_on_mercy.jpg' alt='art' />
                        <h3>A COMMENTARY ON MERCY</h3>
                    </Link>
                </div>
            </div>
        </div>
    </main >
}