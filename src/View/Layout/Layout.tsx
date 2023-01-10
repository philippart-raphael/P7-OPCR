import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

export default function Layout(): JSX.Element {
    return (
        <>
            <div className="Wrapper">
                <Outlet />
            </div>
        </>
    );
}
