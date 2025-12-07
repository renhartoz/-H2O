import Navbar from "./components/Navbar";
import ColorPalette from "./components/ColorPalette";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./components/Footer";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <ParallaxProvider scrollAxis="vertical">
            <ColorPalette>
                <Navbar />
                <Footer />
            </ColorPalette>
        </ParallaxProvider>
    );
}

export default App;
