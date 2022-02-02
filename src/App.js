import React from "react";

import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Brand } from "./components/brand/Brand";
import { What } from "./components/what/What";
import { Feature } from "./components/feature/Feature";
import { Possibility } from "./components/possibility/Possibility";
import { Cta } from "./components/cta/Cta";
import { Blog } from "./components/blog/Blog";
import { Footer } from "./components/footer/Footer";

import './App.css'

const App=() => {
    return(<div className="App">
        <div className="gradient_bg">
            <Navbar></Navbar>
            <Header></Header>
        </div>
        <What></What>
        <Feature></Feature>
        <Possibility></Possibility>
        <Cta></Cta>
        <Blog></Blog>
        <Footer></Footer>
    </div>)
}

export default App