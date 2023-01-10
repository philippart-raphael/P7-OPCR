import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import "./App.scss";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<div>Home</div>} />
                    <Route path="about" element={<div>about</div>} />
                    <Route path="*" element={<div>404</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
