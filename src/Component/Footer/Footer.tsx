import React from "react";
import Logo from "../Logo/Logo";
import './Footer.scss';

export default function Footer({ img }: { img: string }) {
    return (
        <footer className="Footer">
            <Logo img={img} altText="Logo Kasa" link={false} pathLink="/"  imgFilter="0%" imgWidth="100px"/>
            <div>© Kasa, All rights reserved</div>
        </footer>
    );
}
