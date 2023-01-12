import { Link } from "react-router-dom";
import "./Logo.scss";
import { ReactElement, ReactNode } from "react";

export default function Logo(
    {
        img,
        altText,
        link,
        pathLink
    }: { img: string, altText: string, link: boolean, pathLink: string }
): JSX.Element {
    const imgBalise: ReactNode| JSX.Element = <img src={img} alt={altText} className="Logo" />
    return (
        <div>
            {link ? <Link to={pathLink}>
                { imgBalise }
            </Link> : imgBalise}
        </div>
    );
}
