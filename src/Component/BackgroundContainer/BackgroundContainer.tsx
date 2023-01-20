import { ReactNode } from "react";
import "./BackgroundContainer.scss";

export default function BackgroundContainer(
    { divRadius, children }
        : { divRadius: string, children: ReactNode }): JSX.Element {
    return (
        <div className="BackgroundContainer">{children}</div>
    );
}
