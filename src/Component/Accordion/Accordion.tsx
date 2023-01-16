import { ReactElement, useState } from "react";
import BackgroundContainer from "../BackgroundContainer/BackgroundContainer";
import vector from "./img/Vector.png";
import styled from "styled-components";
import "./Accordion.scss";

const StyledDiv = styled.div<{ txtSizeContent: string}>`
  font-size: ${(props) => props.txtSizeContent ? `${props.txtSizeContent}` : "18px"};
`;

export default function Accordion(
    {
        title,
        value,
        active,
        valueIsArray,
        txtSizeContent
    }: { title: string, value: string | string[] | any, active: boolean, valueIsArray: boolean, txtSizeContent: string }) {
    const [isActive, setIsActive] = useState(active);
    let valueProcess:  ReactElement[] = [];

    if (valueIsArray) {
        for (let i = 0; i < value.length; i++) {
            valueProcess.push(<p key={`AccordionData-${i}`}>{value[i]}</p>);
        }
    } else {
        valueProcess.push(<p key={`AccordionData`}>{value}</p>);
    }

    return (
        <div className="Accordion">
            <div className="AccordionTitle" onClick={() => setIsActive(!isActive)}>
                <div>
                    {title}
                    <span>
                        <img src={vector} alt="Options" className={isActive ? "AccordionClose" : "AccordionOpen"} />
                    </span>
                </div>
            </div>
            {isActive &&
                <StyledDiv className="AccordionContent" txtSizeContent="">
                    <BackgroundContainer divRadius="10px" children={valueProcess} />
                </StyledDiv>
            }
        </div>
    );
}
