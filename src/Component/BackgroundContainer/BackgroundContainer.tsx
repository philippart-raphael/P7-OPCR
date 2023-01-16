import styled from "styled-components";
import { ReactNode } from "react";
import "./BackgroundContainer.scss";

const StyledDiv = styled.div<{ divRadius: string }>`
  border-radius: ${(props) => props.divRadius ? `${props.divRadius}` : "0"};
`;

export default function BackgroundContainer(
    { divRadius, children }
        : { divRadius: string, children: ReactNode }): JSX.Element {
    return (
        <StyledDiv className="BackgroundContainer" divRadius={divRadius}>{children}</StyledDiv>
    );
}
