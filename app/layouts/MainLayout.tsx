export default function MainLayout(props: React.PropsWithChildren) {
    return <div id='main-layout-container'>
        <div id='header-banner'>
        </div>
        {props.children}
    </div>
}