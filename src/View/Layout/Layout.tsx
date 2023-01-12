import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";
import "./Layout.scss";
import logo from "./img/logo/Logo.png";

export default function Layout(): JSX.Element {
    return (
        <>
            <div className="Wrapper">
                <Header img={logo} />
                <Outlet />
            </div>
        </>
    );
}
