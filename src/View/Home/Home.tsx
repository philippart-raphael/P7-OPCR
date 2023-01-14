import Banner from "../../Component/Banner/Banner";
import background from "./img/background-home.png";
import BackgroundContainer from "../../Component/BackgroundContainer/BackgroundContainer";
import LeaseCard from "../../Component/LeaseCard/LeaseCard";
import "./Home.scss";

export default function Home(): JSX.Element {
    return (
        <>
            <Banner img={background} altText="Bannière d'accueil" textCenter="Chez vous, partout et ailleurs" />
            <BackgroundContainer divRadius="25px" children={<LeaseCard />}/>
        </>
    );
}
