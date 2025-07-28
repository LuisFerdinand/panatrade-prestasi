import Landing from "../components/section/Landing"
import Brand from "../components/section/Brand"
import About from "../components/section/About"
import CoreValue from "../components/section/CoreValue"

const Home = () => {
    return (
        <div className="bg-main-bg">
            {/* Add padding-top to account for fixed header */}
            <div id="landing">
                <Landing />
            </div>
            <div id="brand">
                <Brand />
            </div>
            <div id="about">
                <About />
            </div>
            <div id="core-value">
                <CoreValue />
            </div>
        </div>
    )
}

export default Home