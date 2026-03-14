import Contact from "./Contact";
import Home from "./Home";

export default function Router() {
    const path = window.location.pathname;

    if (path === "/") return <Home />;
    if (path === "/contact") return <Contact />;

    return <Home />;
}