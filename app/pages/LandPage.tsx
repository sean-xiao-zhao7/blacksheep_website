export default function LandingPage() {
    return <main id='landing-page-container'>
        <div className="intro-container">
            <h1>We all need supportive community.<br />
                If you live in the Mississauga area, get connected today!</h1>
            {/* <a href='/learn-more' className="emphasis">LEARN MORE!</a> */}
        </div>
        <div id='videos-section-container'>
            <div id='videos-items-container'>
                <div className="video">
                    Video 1
                </div>
                <div className="video">
                    Video 2
                </div>
            </div>
            <p>COMING SOON</p>
        </div>
        <div id='blog-section-container'>
            <h2>WHY DOES COMMUNITY MATTER?</h2>
            <p>Increase your knowledge on the benefits of spirtiual commnity by following our monthyly blog.</p>
            <div id='blog-items-container'>
                <div className="blog-item">
                    <h3>PLURALITY IN BIBLICAL ONENESS</h3>
                </div>
                <div className="blog-item"><h3>THE ART OF STORYTELLING</h3></div>
                <div className="blog-item"><h3>A COMMENTARY ON MERCY</h3></div>
            </div>
        </div>
    </main >
}