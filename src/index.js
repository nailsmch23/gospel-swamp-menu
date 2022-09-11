
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import QueueContainer from "./components/QueueContainer";
import MenuContainer from "./components/MenuContainer";
import icon from "./images/favicon.ico";

const favicon = document.getElementById('favicon');
favicon.setAttribute('href', icon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MenuContainer />} />
            <Route path="queue" element={<QueueContainer />} />
        </Routes>
    </BrowserRouter>
);

