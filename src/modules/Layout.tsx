import React from "react";
import Header from "./header/Header";
import { LayoutWrapper } from "@styles/LayoutStyles";
import Footer from './footer/Footer';
import { Link, Route, Routes } from "react-router-dom";
import Main from "./main/Main";

export const Layout = () => {
    return(
        <LayoutWrapper>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/questions" element={<p>questions</p>}/>
                <Route path="/tags" element={<p>tags</p>}/>
            </Routes>
            <Footer/>
        </LayoutWrapper>
    )
}