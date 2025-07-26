import './App.css'

import { Route, Routes, useNavigate} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout.tsx";
import {Login} from "./view/pages/Login/Login.tsx";
import {useEffect} from "react";
import {isTokenExpired} from "./auth/auth.ts";
// import * as React from "react";

function App() {
    const navigate=useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            navigate("/login");
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/*" element={<DefaultLayout/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    );
}

export default App