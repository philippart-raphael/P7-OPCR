import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header({ img }: { img: string }): JSX.Element {
    return (
        <header>
            <nav className="Header">
                <Logo img={img} altText="Logo Kasa" link={true} pathLink="/" imgFilter=""/>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}
