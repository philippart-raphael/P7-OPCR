import Banner from "../../Component/Banner/Banner";
import background from "./img/background-about.png";
import "./About.scss";

export default function About(): JSX.Element {
    return (
        <Banner img={background} altText="Bannière d'accueil" textCenter="" />
    );
}
