import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Gallery() {
    return (
        <section className="grid grid-cols-4 gap-4">
            <Link to={"/useState"}>
                <Card description="lorem ipsum dolor" title="useState" />
            </Link>
            <Link to={"/useEffect"}>
                <Card description="lorem ipsum dolor" title="useEffect" />
            </Link>
            <Link to={"/"}>
                <Card description="lorem ipsum dolor" title="use" />
            </Link>
            <Link to={"/"}>
                <Card description="lorem ipsum dolor" title="use" />
            </Link>
        </section>
    )
}