import styled from "styled-components";
import "./ImageGradient.scss";

const StyledDiv = styled.div<{ imgOpacity: number, imgRadius: string }>`
  opacity: ${(props) => props.imgOpacity ? props.imgOpacity : "0"};
  border-radius: ${(props) => props.imgRadius ? props.imgRadius : "0"};
`;

export default function ImageGradient({ imgOpacity, imgRadius }: { imgOpacity: number, imgRadius: string }): JSX.Element {
    return (
        <StyledDiv className="ImageGradient" imgOpacity={imgOpacity} imgRadius={imgRadius} />
    );
}
