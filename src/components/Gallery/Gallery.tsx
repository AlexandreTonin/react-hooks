import { Link } from "react-router-dom";
import Card from "../Card/Card";
import PageContainer from "../PageContainer/PageContainer";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Gallery() {

    return (
        <PageContainer>
            <div className="text-[#404040] lg:pb-6 pb-4 hidden lg:flex justify-end font-medium">
                <ToggleButtonGroup
                    orientation="horizontal"
                    exclusive
                >
                    <ToggleButton value="list" aria-label="list">
                        <LuLayoutList />
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                        <LuLayoutGrid />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-4">
                <Link to={"/useState"}>
                    <Card description="lorem ipsum dolor" title="useState()" />
                </Link>
                <Link to={"/useEffect"}>
                    <Card description="lorem ipsum dolor" title="useEffect()" />
                </Link>
                <Link to={"/"}>
                    <Card description="lorem ipsum dolor" title="use" />
                </Link>
                <Link to={"/"}>
                    <Card description="lorem ipsum dolor" title="use" />
                </Link>
            </section>
        </PageContainer>
    )
}