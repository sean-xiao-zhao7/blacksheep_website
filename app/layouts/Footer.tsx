import { Link } from "react-router";

export default function Footer() {
    return <footer>
        <div id='left'>
            <h2>LEGAL</h2>
            <p><Link to='/terms'>TERMS & CONDITIONS</Link></p>
            <p><Link to='/privacy'>PRIVACY POLICY</Link></p>
            <p>&copy; 2025 BLACKSHEEP</p>
        </div>
        <div id='right'>
            <h2>CONTACT US</h2>
            {/* <p>SOCIAL MEDIA</p> */}
            <p>contact.us.blacksheep@gmail.com</p>
        </div>
    </footer>
}