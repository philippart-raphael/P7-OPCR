import "./ImageCover.scss";
import styled from "styled-components";

const StyledImg = styled.img<{ imgRadius: string }>`
  border-radius: ${(props) => props.imgRadius ? props.imgRadius : "0"};
`;

export default function ImageCover(
    { src, altText, imgRadius }: { src: string, altText: string, imgRadius: string }
): JSX.Element {
    return (
        <StyledImg className="ImageCover" src={src} alt={altText} imgRadius={imgRadius} />
    );
}
