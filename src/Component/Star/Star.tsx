import star from './img/Star.png';
import styled from "styled-components";
import "./Star.scss";

const StyledImg = styled.img<{ imgFilter: string }>`
  filter: ${(props) => props.imgFilter ? "brightness(100%)" : "grayscale(100%) opacity(40%)"};
`;

export default function Star({ isFilled }: { isFilled: boolean }): JSX.Element {
    return (
        isFilled ? <StyledImg src={star} alt="Star" className="StarFilled" imgFilter=""/> : <StyledImg src={star} alt="Star" className="StarUnFilled" imgFilter="1"/>
    );
}
