import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Logo.scss";

const StyledImg = styled.img<{ imgFilter: string, imgWidth: string }>`
  filter: ${(props) => props.imgFilter ? "brightness(0%) invert(1)" : "brightness(100%)"};
  width: ${(props) => props.imgWidth ? `${props.imgWidth}` : "200px"};
`;

export default function Logo(
    {
        img,
        altText,
        link,
        pathLink,
        imgWidth,
        imgFilter
    }: { img: string, altText: string, link: boolean, pathLink: string, imgWidth: string, imgFilter: string }
): JSX.Element {
    const imgBalise = <StyledImg src={img} alt={altText} className="Logo" imgFilter={imgFilter} imgWidth={imgWidth} />;
    return (
        <div>
            {link ? <Link to={pathLink}>
                {imgBalise}
            </Link> : imgBalise}
        </div>
    );
}
