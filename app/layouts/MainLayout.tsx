import { Link } from "react-router";
import Footer from "./Footer";

export default function MainLayout(props: React.PropsWithChildren) {
    return <div id='main-layout-container'>
        <Link to='/'><div id='header-banner'>
        </div>
        </Link>
        {props.children}
        <Footer />
    </div>
}