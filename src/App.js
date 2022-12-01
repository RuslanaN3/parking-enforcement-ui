import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import DashboardPage from "./pages/DashboardPage";


function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<DashboardPage />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
