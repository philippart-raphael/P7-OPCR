import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Home/Home";
import "./App.scss";
import About from "../View/About/About";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home /> }/>
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
